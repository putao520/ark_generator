from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from config.config import Config

db_cfg = Config().get_instance().getDB()
SQLALCHEMY_DATABASE_URL = f"""mysql+pymysql://{str(db_cfg["user"])}:{str(db_cfg["password"])}@{str(db_cfg["host"])}/{str(db_cfg["database"])}"""


# SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:123456@192.168.75.80:3306/fos"

class db:
    handle = None

    def __init__(self):
        self.engine = create_engine(SQLALCHEMY_DATABASE_URL, encoding='utf8', echo=True, pool_recycle=1800)
        self.SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=self.engine)

    def __get(self):
        session = self.SessionLocal()
        return session

    @staticmethod
    def get_instance():
        if db.handle is None:
            db.handle = db()
        return db.handle.__get()
