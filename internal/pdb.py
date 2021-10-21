import re
import sys

import pdbparse
import aiofiles
from internal import files

base_type_size = {
    "T_32PRCHAR": 4,
    "T_64PRCHAR": 8,
    "T_32PUCHAR": 4,
    "T_64PUCHAR": 8,
    "T_32PULONG": 4,
    "T_32PLONG": 4,
    "T_64PULONG": 8,
    "T_64PLONG": 8,
    "T_32PUQUAD": 4,
    "T_32PQUAD": 4,
    "T_64PUQUAD": 8,
    "T_64PQUAD": 8,
    "T_32PUSHORT": 4,
    "T_32PSHORT": 4,
    "T_64PUSHORT": 8,
    "T_64PSHORT": 8,
    "T_32PVOID": 4,
    "T_64PVOID": 8,
    "T_32PWCHAR": 4,
    "T_64PWCHAR": 8,
    "T_INT4": 4,
    "T_INT8": 8,
    "T_LONG": 4,
    "T_QUAD": 8,
    "T_RCHAR": 1,
    "T_REAL32": 4,
    "T_REAL64": 8,
    "T_REAL80": 10,
    "T_SHORT": 2,
    "T_UCHAR": 1,
    "T_UINT4": 4,
    "T_ULONG": 4,
    "T_UQUAD": 8,
    "T_USHORT": 2,
    "T_WCHAR": 2,
    "T_HRESULT": 4,
}


class PDB:
    def __init__(self, sign: str, name: str, pdb: str):
        self.parse = pdbparse.parse(pdb)  # pdbparse.PDB7 | pdbparse.PDB2
        try:
            self.sects = self.parse.STREAM_SECT_HDR_ORIG.sections
        except AttributeError as e:
            self.sects = self.parse.STREAM_SECT_HDR.sections
        g_dbi = self.parse.STREAM_DBI
        match g_dbi.DBIHeader.Machine:
            case 'IMAGE_FILE_MACHINE_AMD64':
                self.ARCH_PTR_SIZE = 8
            case 'IMAGE_FILE_MACHINE_IA64':
                self.ARCH_PTR_SIZE = 8
            case _:
                self.ARCH_PTR_SIZE = 4
        self.sign = sign
        self.name = name
        self.name_str = name.replace(".", "_")
        self.out_buffer = self.init()
        self.structs_dict = {}

    # 初始化js
    def init(self):
        return f'''const memory = require("./MemoryBuffer.js");
        const {self.name_str} = {{
            base: findDriver("{self.name}"),
            name: "{self.name}",
            '''

    # 判断结构成员字节长度
    def __get_member_size(self, lf) -> int:
        if isinstance(lf, str):
            if lf == 'LF_POINTER':
                return self.ARCH_PTR_SIZE
            else:
                return base_type_size[str(lf)]

        leaf_type_str = str(lf.leaf_type)
        if leaf_type_str == "LF_STRUCTURE" or leaf_type_str == "LF_ARRAY" or leaf_type_str == "LF_UNION":
            return lf.size
        elif leaf_type_str == "LF_POINTER":
            return self.ARCH_PTR_SIZE
        elif leaf_type_str == "LF_MODIFIER":
            return self.__get_member_size(lf.modified_type)
        elif leaf_type_str == "LF_ENUM":
            return 4
        else:
            return -1

    # 处理全局变量
    def vars(self):
        g_syms = self.parse.STREAM_GSYM
        self.out_buffer += f'''
            variable: {{'''
        # 遍历变量
        for name, info in g_syms.vars.items():
            if info.segment < len(self.sects):
                if re.match(r"^[a-zA-Z_\d]+$", name) is None:
                    continue
                va_off = self.sects[info.segment - 1].VirtualAddress + info.offset
                # else:
                # va_off = 0
                # print("var=> %s,%#x,%d" % (name, va_off, info.symtype))
                self.out_buffer += f'''
                get {name}(){{
                    return memory.from({self.name_str}.base + {hex(va_off)}n, {self.ARCH_PTR_SIZE});
                }},'''
        self.out_buffer += f'''
            }},
        '''
        return self

    # 处理全局函数
    def funcs(self):
        result_name = re.compile(r"^[a-zA-Z_$]")
        g_syms = self.parse.STREAM_GSYM
        self.out_buffer += f'''
            functional: {{
            '''
        # 遍历函数
        for name, info in g_syms.funcs.items():
            # breakpoint()
            if result_name.match(name):
                va_off = self.sects[info.segment - 1].VirtualAddress + info.offset
                # print("func=> %s,%#x,%d" % (name, va_off, info.symtype))
                self.out_buffer += f'''{name}: (...args) => procedure({self.name_str}.base + {hex(va_off)}n, 1, args),
                '''
            # else:
                # breakpoint()
        self.out_buffer += f'''
            }},
        '''
        return self

    # 预构造全局结构信息
    def __pre_build_structs(self):
        structs_dict = {}
        g_tpis = self.parse.STREAM_TPI
        # 遍历结构
        for name, info in g_tpis.structures.items():
            structs_dict[name] = info
            # 查找结构化成员(如果存在)
            if info.fieldlist and not isinstance(info.fieldlist, str):
                for field in info.fieldlist.substructs:
                    str_type = str(field.index) if isinstance(field.index, str) else str(field.index.leaf_type)
                    if str_type == 'LF_STRUCTURE':
                        structs_dict[field.name] = field.index

        return structs_dict

    def __build_struct_pointer(self, info, name, offset, child=False):
        if child:
            return f"""
                    // pointer-array
                    {name}(index){{
                        return this.#buffer.pointer({offset}n + (BigInt(index) * {self.ARCH_PTR_SIZE}n));
                    }}
                    """
        else:
            return f"""
                    // pointer
                    {name}(){{
                        return this.#buffer.pointer({offset}n);
                    }}
            """

    def __build_struct_enum(self, info, name, offset, child=False):
        if child:
            return f"""
                    // enum-array
                    {name}(index){{
                        const b = new DataView(this.#buffer.read(4, {offset}n + (BigInt(index) * 4n)), 0);
                        return b.getUint32();
                    }}
            """
        else:
            return f"""
                    // enum
                    {name}(){{
                        const b = new DataView(this.#buffer.read(4, {offset}n), 0);
                        return b.getUint32();
                    }}
            """

    def __build_struct_array(self, info, name, offset):
        # breakpoint()
        # info.size # array 总大小
        if isinstance(info.element_type, str):
            member_size = self.__get_member_size(str(info.element_type))
            # breakpoint()
            total_size = int(info.size/member_size)
            return f"""
                    // array
                    {name}(index, length={total_size}){{
                        const size = {member_size};
                        return this.#buffer.read(size * length, ({offset}n + BigInt(size * index)));
                    }}
                    {name}Offset(index=0){{
                        const size = {member_size};
                        return {offset}n + BigInt(size * index);
                    }}
                    {name}Size(){{
                        return {info.size};
                    }}
            """
        else:
            # breakpoint()
            element_info = info.element_type
            if hasattr(element_info, 'size'):
                # member_size = element_info.size  # 单个结构成员大小
                _name = element_info.name
            else:
                _name = name

            if len(_name) == 0:
                _name = name

            return self.__build_struct_index(element_info, _name, offset, True)

    def __build_struct_value(self, info, name, offset, child=False):
        member_size = base_type_size[str(info)]
        match member_size:
            case 1:
                line_str = "b.getUint8()"
            case 2:
                line_str = "b.getUint16()"
            case 4:
                line_str = "b.getUint32()"
            case 8:
                line_str = "b.getBigInt64()"
            case _:
                line_str = "undefined"

        if child:
            return f"""
                    // value-array
                    {name}(index){{
                        const b = new DataView(this.#buffer.read({member_size}, ({offset}n + ( index * {member_size}n))), 0);
                        return {line_str};
                    }}
            """
        else:
            return f"""
                    // value
                    {name}(){{
                        const b = new DataView(this.#buffer.read({member_size}, {offset}n), 0);
                        return {line_str};
                    }}
            """



    def __build_struct_bit(self, info, name, offset):
        return f"""
                // bitfield
                {name}(){{
                    return this.#buffer.bits().rd({info.position}, {info.length});
                }}
        """

    def __build_struct_index(self, index, name, offset, child=False):
        code = ""
        # breakpoint()
        if isinstance(index, str):
            type_str = str(index)
            # print(str(type_str))
            if type_str == 'LF_POINTER' or type_str.startswith('T_64P') or type_str.startswith('T_32P'):
                code += self.__build_struct_pointer(index, name, offset)
            else:
                code += self.__build_struct_value(index, name, offset)
        else:
            if hasattr(index, 'name') and len(index.name) > 0:
                name = index.name

            if str(name).startswith("<"):
                return code

            # breakpoint()
            match str(index.leaf_type):
                case 'LF_POINTER':
                    code += self.__build_struct_pointer(index, name, offset, child)
                case 'LF_ENUM':
                    code += self.__build_struct_enum(index, name, offset, child)
                case 'LF_ARRAY':
                    code += self.__build_struct_array(index, name, offset)
                case 'LF_UNION':
                    # breakpoint()
                    code = self.__build_structs_warp_inline(index, name, "", offset, child)
                case 'LF_STRUCTURE':
                    # breakpoint()
                    code += self.__build_structs_warp_inline(index, name, "", offset, child)
                case 'LF_BITFIELD':
                    code += self.__build_struct_bit(index, name, offset)
                case 'LF_MODIFIER':
                    # breakpoint()
                    code += self.__build_struct_index(index.modified_type, name, offset, child)
                case _:
                    pass
                    # breakpoint()
        return code

    def __build_structure(self, info, child=False):
        code = ""
        if not isinstance(info.fieldlist, str):
            if str(info.fieldlist.leaf_type) == 'LF_FIELDLIST':
                for field in info.fieldlist.substructs:
                    if str(field.leaf_type) == 'LF_MEMBER':
                        # print("             " + field.name)
                        if isinstance(field.index, str) and field.index not in base_type_size:
                            breakpoint()
                        code += self.__build_struct_index(field.index, field.name, field.offset, child)
        else:
            # breakpoint()
            pass
        return code

    def __build_structs_warp_inline(self, info, name, str_offset="", offset=0, child=False):
        _code = self.__build_structs_warp(info, True, str_offset, offset, child)
        return f"""
                {name}(){{
                    {_code}
                }}
            """

    # 输入单个数据结构信息
    def __build_structs_warp(self, info, inline=False, str_offset="", offset=0, child=False):
        code = ""
        # 输入的是 数据结构信息
        if info.leaf_type == 'LF_STRUCTURE' or info.leaf_type == 'LF_UNION':
            # print(info.name)
            code += self.__build_structure(info, child)

        # breakpoint()
        if not inline:
            return f"""
                {info.name}: class{{
                    #buffer;
                    constructor(address) {{
                        this.#buffer = memory.from(address, {info.size})
                    }}
                    getSize(){{
                        return {info.size};
                    }}
                    {code}
                }},
            """
        else:
            offset_str = offset if len(str_offset) == 0 else str_offset
            if not hasattr(info, 'size'):
                breakpoint()
            return f"""
                const cls = class{{
                    #buffer;
                    constructor(address) {{
                        this.#buffer = memory.from(address, {info.size})
                    }}
                    getSize(){{
                        return {info.size};
                    }}
                    {code}
                }}
                return new cls(this.#buffer.address() + {offset_str}n);
            """

    def __build_structs(self):
        buffer = ""
        tpi = self.parse.STREAM_TPI
        # 遍历结构
        for name, info in tpi.structures.items():
            buffer += self.__build_structs_warp(info)
        # ===========================
        return f"""
            structure:{{
                {buffer}
            }}
        """

    # 处理结构
    def structs(self):
        self.structs_dict = self.__pre_build_structs()
        self.out_buffer += self.__build_structs()

    def remove_null_line(self):
        self.out_buffer = self.out_buffer.replace("\n\n", "\n")

    # 查看JS
    def string(self):
        self.vars()
        self.funcs()
        self.structs()
        self.remove_null_line()
        self.parse.fp.close()
        return str(self.out_buffer + f'''
        }}
{self.name_str}''')

    # 导出JS文件
    async def export(self):
        path = files.build("./js/" + self.sign + "/" + self.name + ".js")
        async with aiofiles.open(path, mode='wb+') as fp:
            content = self.string()
            utf8 = content.encode(encoding='utf-8')
            await fp.write(utf8)
            await fp.close()
            self.out_buffer = self.init()
        return path
