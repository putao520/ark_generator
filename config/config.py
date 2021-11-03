import json


class Config:
    handle = None

    def __init__(self):
        cfg_file_handle = open("./config/config.json", 'r')
        json_data = json.load(cfg_file_handle)
        self.oss = json_data["oss"]
        self.db = json_data["db"]

    def getOSS(self):
        return self.oss

    def getDB(self):
        return self.db

    @staticmethod
    def get_instance():
        if Config.handle is None:
            Config.handle = Config()
        return Config.handle
