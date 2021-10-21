from minio import Minio
from urllib3.exceptions import ResponseError


def testMinio():
    minioClient = Minio('192.168.75.80:9000', access_key='minio', secret_key='putao520', secure=False)
    bucket_name = "fos"
    if not minioClient.bucket_exists(bucket_name):
        minioClient.make_bucket(bucket_name)

    file_info = minioClient.fput_object(bucket_name, 'test', './pdb/1B4A6F5E0766C552C90710C8ACC0295C/ntkrnlmp.pdb')
    print(file_info)

    try:
        result_info = minioClient.fget_object(bucket_name, 'test', './test/test.pdb')
    except ResponseError as err:
        print(err)

    print(result_info)

if __name__ == '__main__':
    testMinio()

