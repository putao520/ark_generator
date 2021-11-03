FROM tiangolo/uvicorn-gunicorn-fastapi:latest
RUN /usr/local/bin/python -m pip install --upgrade pip
RUN echo '构建镜像'
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
RUN echo '---finished----'