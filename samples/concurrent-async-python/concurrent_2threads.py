"""work with 2 threads

    ### Goal
    - Thread1 : listen something loop, add value to list
    - Thread2 : watch the list updated by Thread1

    ### References
    - https://docs.python.org/ja/3/library/queue.html

"""

import logging
import queue
import random
import time
from concurrent.futures import ThreadPoolExecutor


_watching_queue = queue.Queue()
_logger1 = logging.getLogger('worker1')
_logger2 = logging.getLogger('worker2')


def worker1():
    _val_list = list(range(1, 11)) # 1 - 10
    while True:
        time.sleep(1)
        _v = random.choice(seq=_val_list)
        if _v % 2 == 0:
            continue
        _logger1.info(f'put {_v}')
        global _watching_queue
        _watching_queue.put(_v)


def worker2():
    while True:
        time.sleep(3) # interval 2 sec
        global _watching_queue
        _item = _watching_queue.get()
        _logger2.info(f'get item:  {_item}')
        _watching_queue.task_done()


if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG)
    _executor = ThreadPoolExecutor(max_workers=2)
    _executor.submit(worker1)
    _executor.submit(worker2)

