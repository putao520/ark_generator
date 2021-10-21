import os


def build(path: str) -> str:
    dirs = "/".join(path.split("/")[:-1]) + "/"
    if not os.access(dirs, os.F_OK):
        os.makedirs(dirs)
    if os.access(path, os.F_OK):
        os.remove(path)
    return path


class Files:
    def __init__(self, root: str):
        self.root = root

    # 如果文件存在,直接返回可用下载路径,不存在下载后返回路径
    async def get_file(self, path, fn):
        fullPath = self.root + path
        # 文件夹不存在,创建文件夹
        dirs = "/".join(fullPath.split("/")[:-1]) + "/"
        if not os.access(dirs, os.F_OK):
            os.makedirs(dirs)
        # 文件存在,直接返回
        if os.access(fullPath, os.F_OK):
            return fullPath
        # 文件不存在,调用fn获得文件
        flag = await fn(fullPath)
        if not flag:
            return None
        # 上传文件到minio
        # 新增文件管理信息到文件管理系统
        return fullPath if flag else None
