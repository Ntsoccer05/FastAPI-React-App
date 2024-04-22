# from fastapi import FastAPI

# from routers import common

# app = FastAPI(
#     title="FastAPI Playground",
#     version="0.0.1",
# )
# app.include_router(common.router, prefix="/api", tags=["common"])

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def user():
    return {"id": "1",
            "name":"test1",
            "email":"test1@email.com",
            "img": "aaa",
            "is_admin": "false"}