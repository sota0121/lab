"""The Python implementation of the GRPC helloworld.Greeter server."""

from concurrent import futures
import logging
import time

import grpc
import do_something_pb2
import do_something_pb2_grpc


class AnyServicer(do_something_pb2_grpc.SomethingExecutorServicer):

    def DoSomething(self, request, context):
        logging.debug(f"{self.DoSomething.__name__} requested (name: {request.name}, proctime: {request.proctime})")
        time.sleep(int(request.proctime))
        logging.debug("done !")
        return do_something_pb2.Reply(message=f'{request.name} has done!(proctime: {request.proctime})', proctime=request.proctime)


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    do_something_pb2_grpc.add_SomethingExecutorServicer_to_server(AnyServicer(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    serve()
