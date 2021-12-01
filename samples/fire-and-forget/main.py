"""fire and forget samples

    fire and forget : 重い処理の完了を待たずに先に処理を完了させる行為

    Resources:
        - https://kuttsun.blogspot.com/2020/03/python-fire-and-forget.html
        - https://pod.hatenablog.com/entry/2019/03/21/162511
"""
import asyncio
from concurrent.futures import ProcessPoolExecutor
from functools import partial
import time


def heavy_proc(proc_time: int, st: int=0):
    print(f"-- heavy start {time.time() - st}s")
    time.sleep(proc_time)
    print(f"-- heavy end {time.time() - st}s")

def run():
    st = time.time()
    loop = asyncio.get_event_loop()
    executor = ProcessPoolExecutor(max_workers=3)
    print(f"MAIN: start {time.time() - st}s")
    loop.run_in_executor(executor, partial(heavy_proc, 3, st))
    print(f"MAIN: end {time.time() - st}s")
    time.sleep(10)
    print(f"MAIN: exit {time.time() - st}s")

if __name__ == "__main__":
    run()

