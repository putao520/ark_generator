import datetime
import os
import time
from datetime import timedelta

from db.db import db
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
            # 入库文件记录
            extensions = file.split(".")[-1]
            c_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            file_info = FilesObject(
                file_name=file,
                extensions_name=extensions,
                oss_resource=oss.bucket_name,
                md5="",
                signed=_id,
                pdb_name=name,
                fos_name="",
                create_at=c_time,
                update_at=c_time,
                owner=0,
                size=0
            )
            session.add(file_info)
            session.commit()
            # ===================
            lo = LibsObject(_id, name, file)
            path = await lo.build()
            if path is not None:
                oss_name = oss.get_instance().upload(path)
                # 更新文件记录
                c_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
                file_info.md5 = Files.md5(path)
                file_info.fos_name = oss_name
                file_info.size = os.path.getsize(path)
                file_info.update_at = c_time
                session.commit()
            else:
                raise ValueError("生成库文件失败!")
        else:
            # 有效库文件记录
            file_info = _info
            # 无效库文件存在超过1天,删除它,调到头部继续执行
            currentAt = int(time.mktime(datetime.datetime.now().timetuple()))
            updateAt = int(time.mktime(file_info.update_at.timetuple()))
            if currentAt - updateAt > 86400:
                session.delete(_info)
                session.commit()
                return None
            # 库文件有效
            if file_info.size > 0:
                path = PDB.build_path(_id, name)
                oss_name = file_info.fos_name
                if not os.access(path, os.F_OK):
                    oss.get_instance().download(oss_name, path)
        # ==========================
        if oss_name is not None:
            return oss.get_instance().get_download_signed_url(oss_name, timedelta(minutes=5))
        else:
            # raise ValueError("库文件路径获取失败!")
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
            else:
                return None
        return result
