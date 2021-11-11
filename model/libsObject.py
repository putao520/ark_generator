import aiofiles
import aiohttp

from internal import files
from internal.pdb import PDB


class LibsObject:
    def __init__(self, _id: str, name: str, file: str):
        self.id = _id
        # 文件名
        self.name = file
        # pdb名
        self.pdb = name

    async def build(self):
        url = "http://msdl.microsoft.com/download/symbols/" + self.name + "/" + self.id + "1/" + self.name
        async with aiohttp.ClientSession() as session:
            headers = {"User-Agent": "Microsoft-Symbol-Server/10.1710.0.0", "Accept-Encoding": "gzip"}
            async with session.get(url, headers=headers) as res:
                try:
                    if res.ok:
                        path = files.build("./pdb/" + self.id + "/" + self.name)
                        async with aiofiles.open(path, mode='wb+') as fp:
                            while True:
                                chunk = await res.content.read(0x8000)
                                if not chunk:
                                    break
                                await fp.write(chunk)
                            await fp.close()
                            # 解析PDB并生产JS头文件,提交到存储服务,返回下载地址
                            pdb = PDB(self.id, self.name, path)
                            return await pdb.export()
                    else:
                        return None
                except SyntaxError:
                    return None
                except Exception:
                    return None
