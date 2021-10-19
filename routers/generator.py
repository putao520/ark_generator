"""
负责下载PDB,解析PDB,并生成对应的JS文件,提交保存到文件存储系统
"""

from fastapi import FastAPI, Query, Form, APIRouter, File, UploadFile
from fastapi.responses import PlainTextResponse

import aiohttp
import aiofiles

from internal import files
from internal.pdb import PDB

app = FastAPI()
router = APIRouter(
    prefix="/generator",
    tags=["generator"],
    responses={404: {"description": "Not found"}}
)

@router.get('/test/{_id}/{name}/{file}')
async def test(_id: str, name: str, file: str):
    # breakpoint()
    pdb = PDB(file, "./pdb/" + _id + "/" + name)
    return {'status': 'ok', 'data': await pdb.export()}

# @router.get('/upgrade/{_id}/{name}/{file}', response_class=PlainTextResponse)
@router.get('/upgrade/{_id}/{name}/{file}')
async def upgrade(_id: str, name: str, file: str):
    # 下载 pdb
    url = "http://msdl.microsoft.com" + "/download/symbols/" + name + "/" + _id + "1/" + name
    async with aiohttp.ClientSession() as session:
        headers = {"User-Agent": "Microsoft-Symbol-Server/10.1710.0.0", "Accept-Encoding": "gzip"}
        async with session.get(url, headers=headers) as res:
            try:
                if res.ok:
                    path = files.build("./pdb/" + _id + "/" + name)
                    async with aiofiles.open(path, mode='wb+') as fp:
                        while True:
                            chunk = await res.content.read(0x8000)
                            if not chunk:
                                break
                            await fp.write(chunk)
                        await fp.close()
                        # 解析PDB并生产JS头文件,提交到存储服务,返回下载地址
                        pdb = PDB(_id, file, path)
                        # js = pdb.string()
                        # return {'status': 'ok'}
                        # return js.encode(encoding='utf-8')
                        return {'status': 'ok', 'data': await pdb.export()}
                else:
                    return {'status': res.reason}
            except SyntaxError:
                return {'status': SyntaxError}
            except Exception:
                return {'status': Exception}
