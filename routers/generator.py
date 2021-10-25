"""
负责下载PDB,解析PDB,并生成对应的JS文件,提交保存到文件存储系统
"""
from typing import List

from fastapi import FastAPI, Query, Form, APIRouter, File, UploadFile
from pydantic import BaseModel
from starlette.responses import JSONResponse, PlainTextResponse

from internal.pdb import PDB
from response.response import msg
from services.libraryService import LibraryService

app = FastAPI()
router = APIRouter(
    prefix="/generator",
    tags=["generator"],
    responses={404: {"description": "Not found"}}
)


class InfoItem(BaseModel):
    id: str
    name: str
    file: str


class InfoArray(BaseModel):
    item: List[InfoItem] = []


@router.get('/test/{_id}/{name}/{file}')
async def test(_id: str, name: str, file: str):
    # breakpoint()
    pdb = PDB(file, "./pdb/" + _id + "/" + name)
    return {'status': 'ok', 'data': await pdb.export()}


# @router.get('/upgrade/{_id}/{name}/{file}', response_class=PlainTextResponse)
@router.post('/upgrade')
async def upgrade(arr: InfoArray):
    try:
        service = LibraryService()
        for info in arr.item:
            service.insert(info.id, info.name, info.file)
        result = await service.get_urls()
        return msg(data=result)
    except BaseException as err:
        print(err)
    return msg(1, "库文件获得失败!")
