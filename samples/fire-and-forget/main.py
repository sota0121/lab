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


def heavy_proc(proc_time: int):
    print("-- heavy start")
    time.sleep(proc_time)
    print("-- heavy end")

def run():
    loop = asyncio.get_event_loop()
    executor = ProcessPoolExecutor(max_workers=3)
    print("MAIN: start")
    loop.run_in_executor(executor, partial(heavy_proc, 3))
    print("MAIN: end")
    time.sleep(10)
    print("MAIN: exit")

if __name__ == "__main__":
    run()

