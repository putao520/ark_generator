"""
负责生成的 JS 文件CURD
"""

from pydantic import BaseModel


class ObjectFile(BaseModel):
    id: int
    name: str
    locale: str
    type: int  # 存储类型 0 本地, 1 阿里云
    meta: str  # 存储对象元数据
