# coding: utf-8
from sqlalchemy import BigInteger, CHAR, Column, Integer, TIMESTAMP, Text, text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
metadata = Base.metadata


class FilesObject(Base):
    __tablename__ = 'files_object'

    id = Column(Integer, primary_key=True, unique=True)
    file_name = Column(CHAR(200))
    extensions_name = Column(CHAR(100))
    oss_resource = Column(CHAR(250))
    md5 = Column(Text)
    signed = Column(CHAR(64))
    pdb_name = Column(CHAR(250))
    fos_name = Column(Text)
    create_at = Column(TIMESTAMP, nullable=False)
    update_at = Column(TIMESTAMP, nullable=False)
    owner = Column(Integer)
    size = Column(BigInteger, nullable=False, server_default=text("'0'"))
