import datetime
import os
import time
from datetime import timedelta

from db.db import db
from internal import files
from internal.files import Files
from internal.pdb import PDB
from model.filesObject import FilesObject
from model.libsObject import LibsObject
from oss.oss import oss


async def info(_id: str, name: str, file: str):
    # 从数据库判断
    try:
        session = db.get_instance()
        _info = session.query(FilesObject) \
            .filter(FilesObject.signed == _id, FilesObject.pdb_name == name, FilesObject.file_name == file).first()
        if _info is None:
            lo = LibsObject(_id, name, file)
            path = await lo.build()
            if path is not None:
                oss_name = oss.get_instance().upload(path)
                extensions = file.split(".")[-1]
                c_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
                file_info = FilesObject(
                    file_name=file,
                    extensions_name=extensions,
                    oss_resource=oss.bucket_name,
                    md5=Files.md5(path),
                    signed=_id,
                    pdb_name=name,
                    fos_name=oss_name,
                    create_at=c_time,
                    update_at=c_time,
                    owner=0,
                    size=os.path.getsize(path)
                )
                session.add(file_info)
                session.commit()
            else:
                raise ValueError("生成库文件失败!")
        else:
            path = PDB.build_path(_id, name)
            oss_name = _info.fos_name
            if not os.access(path, os.F_OK):
                oss.get_instance().download(oss_name, path)
        # ==========================
        if oss_name is not None:
            return oss.get_instance().get_download_signed_url(oss_name, timedelta(minutes=5))
        else:
            raise ValueError("库文件路径获取失败!")
            return None
    except BaseException as err:
        print(err)
    return None


class LibraryService:
    def __init__(self):
        self.taskArr = []

    def insert(self, _id: str, name: str, file: str):
        self.taskArr.append({
            'id': _id,
            'name': name,
            'file': file
        })

    async def get_urls(self):
        result = {}
        for item in self.taskArr:
            download_url = await info(item['id'], item['name'], item['file'])
            if download_url is not None:
                result[item['file']] = download_url
        return result
