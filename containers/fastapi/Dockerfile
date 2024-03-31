# FastAPIで使用するPythonのイメージを指定
FROM tiangolo/uvicorn-gunicorn:python3.11
# PYTHONDONTWRITEBYTECODEとPYTHONUNBUFFEREDはオプション
# pycファイル(および__pycache__)の生成を行わないようにする
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
# コンテナのワークディレクトリを/codeに指定
WORKDIR /code
# ローカルのapplication/pyproject.tomlをコンテナの/codeフォルダ直下に置く
COPY backend/pyproject.toml /code/
# コンテナ内でpipのアップグレードとPoetryのインストールを行う
RUN pip install --upgrade pip && pip install poetry
RUN pip install requests
# コンテナ内でPoetry内のパッケージをインストール
RUN poetry install
# ソースコードをマウント先にコピー
COPY backend/ /code/