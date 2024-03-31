from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
async def health_check():
    """ヘルスチェック用のAPI"""
    return {"status": "pass"}

