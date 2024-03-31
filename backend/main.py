# from fastapi import FastAPI

# from routers import common

# app = FastAPI(
#     title="FastAPI Playground",
#     version="0.0.1",
# )
# app.include_router(common.router, prefix="/api", tags=["common"])

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def hello():
    return {"message": "hello ranble"}