import minio
from minio import Minio
from urllib3.exceptions import ResponseError


def testMinio():
    minioClient = Minio('192.168.75.80:9000', access_key='minio', secret_key='putao520', secure=False)
    bucket_name = "fos"
    if not minioClient.bucket_exists(bucket_name):
        minioClient.make_bucket(bucket_name)

    try:
        file_info = minioClient.fput_object(bucket_name, 'test', './pdb/1B4A6F5E0766C552C90710C8ACC0295C/ntkrnlmp.pdb')
    except FileNotFoundError as err:
        print(err)
    print(file_info)

    try:
        result_info = minioClient.fget_object(bucket_name, 'test', './test/test.pdb')
    except ResponseError as err:
        print(err)
    except minio.error.S3Error as err:
        print(err)
    print(result_info)

    result_info = minioClient.remove_object(bucket_name, 'test')
    print(result_info)

    minioClient.get_presigned_url(bucket_name,)

if __name__ == '__main__':
    testMinio()

