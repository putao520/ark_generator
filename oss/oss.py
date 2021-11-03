import tempfile
import time
import uuid
from datetime import datetime

import minio
from minio import Minio
from urllib3.exceptions import ResponseError

from config.config import Config

store_cfg = Config().get_instance().getDB()


def generator(_prefix):
    rt = ""
    for i in range(100):
        rt = str(uuid.uuid1().int >> 64)

    dt = datetime.now().strftime('%Y%m%d%H%M%S')
    return rt + "_" + dt + "_" + time.strftime('%Z', time.localtime()) + "_" + _prefix


def prefix(path: str):
    splitArr = path.split("/")
    return splitArr[len(splitArr) - 1]


class oss:
    bucket_name = "fos"
    handle = None

    def __init__(self):
        # self.minioClient = Minio('192.168.75.80:9000', access_key='minio', secret_key='putao520', secure=False)
        self.minioClient = Minio(str(store_cfg["host"]), access_key=str(store_cfg["access_key"]),
                                 secret_key=str(store_cfg["secret_key"]), secure=False)
        if not self.minioClient.bucket_exists(oss.bucket_name):
            self.minioClient.make_bucket(oss.bucket_name)

    @staticmethod
    def get_instance():
        if oss.handle is None:
            oss.handle = oss()
        return oss.handle

    def upload(self, path: str):
        oss_name = generator(prefix(path))
        try:
            self.minioClient.fput_object(oss.bucket_name, oss_name, path)
        except FileNotFoundError as err:
            print(err)
            return None
        return oss_name

    def download(self, oss_name, _path=None):
        if _path is None:
            _path = tempfile.gettempdir() + prefix(_path)
        try:
            self.minioClient.fget_object(oss.bucket_name, oss_name, _path)
        except ResponseError as err:
            print(err)
            _path = None
        except minio.error.S3Error as err:
            print(err)
            _path = None
        return _path

    def remove(self, oss_name):
        self.minioClient.remove_object(oss.bucket_name, oss_name)

    def get_upload_signed_url(self, oss_name, expires):
        return self.minioClient.presigned_put_object(oss.bucket_name, oss_name, expires)

    def get_download_signed_url(self, oss_name, expires):
        return self.minioClient.presigned_get_object(oss.bucket_name, oss_name, expires)
