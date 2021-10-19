import os


def build(path: str) -> str:
    dirs = "/".join(path.split("/")[:-1]) + "/"
    if not os.access(dirs, os.F_OK):
        os.makedirs(dirs)
    if os.access(path, os.F_OK):
        os.remove(path)
    return path
