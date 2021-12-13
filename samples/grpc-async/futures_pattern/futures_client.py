"""The Python implementation of the GRPC helloworld.Greeter client."""

from __future__ import print_function

import logging

import grpc
import do_something_pb2
import do_something_pb2_grpc


def run():
    # NOTE(gRPC Python Team): .close() is possible on a channel and should be
    # used in circumstances in which the with statement does not fit the needs
    # of the code.
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = do_something_pb2_grpc.SomethingExecutorStub(channel)
        response = stub.DoSomething(do_something_pb2.Request(name='Sleeper', proctime=3))
    print("SomethingExecutor client received: " + response.message)


if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    run()