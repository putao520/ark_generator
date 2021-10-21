from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model.filesObject import FilesObject

SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:123456@192.168.75.80:3306/fos"

def testMysql():
    engine = create_engine(SQLALCHEMY_DATABASE_URL, encoding='utf8', echo=True)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    session = SessionLocal()
    print(session.query(FilesObject).all())

if __name__ == '__main__':
    testMysql()