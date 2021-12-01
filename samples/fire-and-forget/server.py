"""fire and forget samples

    fire and forget : 重い処理の完了を待たずに先に処理を完了させる行為

    Resources:
        - https://kuttsun.blogspot.com/2020/03/python-fire-and-forget.html
        - https://pod.hatenablog.com/entry/2019/03/21/162511

    Run server:
        cd $APP_DIR
        uvicorn server:app --reload

    Request:
        curl -X GET "localhost:8000/"
"""
import asyncio
from concurrent.futures import ProcessPoolExecutor
from functools import partial
import time

from fastapi import FastAPI

from main import heavy_proc

app = FastAPI()

@app.get('/')
def read_root():
    st = time.time()
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    print(f"MAIN: start {time.time() - st}s")
    executor = ProcessPoolExecutor(max_workers=3)
    loop.run_in_executor(executor, partial(heavy_proc, 3, st))
    print(f"MAIN: exit {time.time() - st}s")
    return {"greeting": f"Hello fastapi {time.time() - st}s"}


@app.get('/items/{item_id}')
def read_item(item_id: int, q: str = None):
    return {"item id": item_id, "query": q}
