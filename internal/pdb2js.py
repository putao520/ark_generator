"""
根据pdb文件生成对应的js头文件
"""
import sys
import pdbparse
from optparse import OptionParser

base_type_size = {
    "T_32PRCHAR": 4,
    "T_64PRCHAR": 8,
    "T_32PUCHAR": 4,
    "T_64PUCHAR": 8,
    "T_32PULONG": 4,
    "T_64PULONG": 8,
    "T_32PUQUAD": 4,
    "T_64PUQUAD": 8,
    "T_32PUSHORT": 4,
    "T_64PUSHORT": 8,
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
    "T_32PLONG": 4,
}


def member_is_pointer(type_name: str) -> bool:
    if type_name == 'LF_POINTER' or type_name.startswith('T_64P') or type_name.startswith('T_32P'):
        return True
    else:
        return False


ARCH_PTR_SIZE = 4


def get_member_size(lf) -> int:
    if isinstance(lf, str):
        return base_type_size[str(lf)]

    leaf_type_str = str(lf.leaf_type)
    if leaf_type_str == "LF_STRUCTURE" or leaf_type_str == "LF_ARRAY" or leaf_type_str == "LF_UNION":
        return lf.size
    elif leaf_type_str == "LF_POINTER":
        return ARCH_PTR_SIZE
    elif leaf_type_str == "LF_MODIFIER":
        return get_member_size(lf.modified_type)
    else:
        return -1


def get_member_bits(lf) -> dict:
    if not isinstance(lf, str):
        if str(lf.leaf_type) == 'LF_BITFIELD':
            return {lf.position: lf.length}
    return {0: 0}


# ===========================================================================================
# 下面是测试脚本
# ===========================================================================================
def lookup_global_vars(pdb: pdbparse.PDB7 | pdbparse.PDB2):
    try:
        sects = pdb.STREAM_SECT_HDR_ORIG.sections
    except AttributeError as e:
        sects = pdb.STREAM_SECT_HDR.sections

    global ARCH_PTR_SIZE
    ARCH_PTR_SIZE = sects[1].Misc.VirtualSize

    g_syms = pdb.STREAM_GSYM

    # 遍历变量
    for sym in g_syms.vars:
        try:
            off = sym.offset
            va_base = sects[sym.segment - 1].VirtualAddress
            if not str(sym.name).startswith("__imp_") and sym.symtype == 0:
                print("var=> %s,%#x,%d" % (sym.name, (off + va_base), sym.symtype))
        except IndexError as e:
            print("Skipping %s, segment %d does not exist" % (sym.name, sym.segment - 1), file=sys.stderr)
        except AttributeError as e:
            pass

    # 遍历函数
    for name, info in g_syms.funcs.items():
        try:
            off = info.offset
            va_base = sects[info.segment - 1].VirtualAddress
            print("fun=> %s,%#x,%d" % (name, (off + va_base), info.symtype))
        except IndexError as e:
            print("Skipping %s, segment %d does not exist" % (info.name, info.segment - 1), file=sys.stderr)
        except AttributeError as e:
            pass

    g_tpis = pdb.STREAM_TPI
    # 遍历结构
    for name, info in g_tpis.structures.items():
        try:
            print("structures=> %s, type:%s size:%d" % (name, str(info.leaf_type), info.size))
            if info.fieldlist:
                if not isinstance(info.fieldlist, str):
                    for field in info.fieldlist.substructs:
                        if isinstance(field.index, str):
                            str_type = str(field.index)
                        else:
                            str_type = str(field.index.leaf_type)
                        if str_type == 'LF_STRUCTURE':
                            b = 2
                        str_pointer_status = 'yes' if member_is_pointer(str_type) else 'no'
                        bits_info = get_member_bits(field.index)
                        # print(bits_info)
                        # print(bits_info.keys())
                        # print(bits_info.values())
                        bits_values = list(bits_info.values())
                        bits_keys = list(bits_info.keys())
                        if len(bits_values) > 0 and bits_values[0] > 0:
                            str_bits = f"yes ->start:{bits_keys[0]} and:{bits_keys[0] + bits_values[0]}"
                        else:
                            str_bits = 'no'

                        if 'FileInformationClass' == field.name:
                            a = 1
                        print("     member=> %s, offset=>%d size:%d type:%s is_pointer:%s bits:%s"
                              %
                              (field.name,
                               field.offset,
                               get_member_size(field.index),
                               str_type,
                               str_pointer_status,
                               str_bits))

        except IndexError as e:
            print("Skipping %s, segment %d does not exist" % (info.name, info.segment - 1), file=sys.stderr)
        except AttributeError as e:
            pass


if __name__ == '__main__':

    parser = OptionParser()
    (opts, args) = parser.parse_args()

    if len(args) != 1:
        parser.error("Need filename")

    lookup_global_vars(pdbparse.parse(args[0]))
