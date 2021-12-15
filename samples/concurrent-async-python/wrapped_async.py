"""async implementation when wrapped by classes"""

import asyncio
from asyncio.tasks import as_completed
import logging
import queue


async def worker1(delay: int):
    """coroutine does not include await
    """
    logging.info(f'[worker] called {delay}')
    await asyncio.sleep(delay=delay)
    logging.info(f'[worker] end {delay}')
    return delay

async def main():
    """manage tasks with list
    """
    delays = [10, 5, 3]
    _tasks = []
    for d in delays:
        _task = asyncio.create_task(worker1(d))
        _tasks.append(_task)

    for _coro in as_completed(_tasks):
        _earliest_result = await _coro
        logging.info(f"[main] earliest result {_earliest_result}")


async def main2():
    """manage tasks with queue.Queue
    """
    delays = [10, 5, 3]
    _tasks = queue.Queue()
    for d in delays:
        _task = asyncio.create_task(worker1(d))
        _tasks.put(_task)

    _tasks_fifo = []
    while not _tasks.empty():
        _tasks_fifo.append(_tasks.get())

    for _coro in as_completed(_tasks_fifo):
        _earliest_result = await _coro
        logging.info(f"[main] earliest result {_earliest_result}")


if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG)
    # asyncio.run(main())
    asyncio.run(main2())
