"""The Python implementation of the GRPC helloworld.Greeter client.

    ### concurrent.futures.ThreadPoolExecutor
    - https://docs.python.org/3/library/concurrent.futures.html
"""

from __future__ import print_function

from concurrent.futures import ThreadPoolExecutor, as_completed
import logging
import random

import grpc
import do_something_pb2
import do_something_pb2_grpc


def run_request(index: int) -> str:
    # NOTE(gRPC Python Team): .close() is possible on a channel and should be
    # used in circumstances in which the with statement does not fit the needs
    # of the code.
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = do_something_pb2_grpc.SomethingExecutorStub(channel)
        proctime = random.choice(seq=[3, 9, 15])
        print(f"Request (index: {index}, proctime: {proctime})")
        response = stub.DoSomething(do_something_pb2.Request(name='Sleeper', proctime=proctime))
    return f"SomethingExecutor client {index} received: {response.message}"


def run_workers(num_of_workers: int=1):
    """
        - https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor-example
        - https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.as_completed
    """
    _futures = []
    # Pattern 1 : Successfully Done.
    # with ThreadPoolExecutor(max_workers=10) as executor:
    #     for i in range(num_of_workers):
    #         _future = executor.submit(run_request, i)
    #         _futures.append(_future)
    #     for f in as_completed(_futures):
    #         try:
    #             result = f.result()
    #         except Exception as e:
    #             print(f'generated exception {repr(e)}')
    #         else:
    #             print(result)

    # Pattern 2 : Successfully Done.
    _executor = ThreadPoolExecutor(max_workers=10)
    for i in range(num_of_workers):
            _future = _executor.submit(run_request, i)
            _futures.append(_future)
    for f in as_completed(_futures):
        try:
            result = f.result()
        except Exception as e:
            print(f'generated exception {repr(e)}')
        else:
            print(result)


if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    num_of_workers = 10
    run_workers(num_of_workers)