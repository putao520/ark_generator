from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import generator
import uvicorn

app = FastAPI()
app.add_middleware(CORSMiddleware,
                   allow_origins=["*"],
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"], )
app.include_router(generator.router)


@app.get("/")
async def index():
    return "hello world"


if __name__ == '__main__':
    uvicorn.run(app='main:app', host='0.0.0.0', port=8000, reload=True, debug=True)
