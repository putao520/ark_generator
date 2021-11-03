FROM python:latest
COPY . /app
WORKDIR ./app
RUN /usr/local/bin/python -m pip install --upgrade pip
RUN pip install -r requirements.txt
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
