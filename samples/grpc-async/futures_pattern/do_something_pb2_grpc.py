# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import do_something_pb2 as do__something__pb2


class SomethingExecutorStub(object):
    """The greeting service definition.
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.DoSomething = channel.unary_unary(
                '/dosomething.SomethingExecutor/DoSomething',
                request_serializer=do__something__pb2.Request.SerializeToString,
                response_deserializer=do__something__pb2.Reply.FromString,
                )


class SomethingExecutorServicer(object):
    """The greeting service definition.
    """

    def DoSomething(self, request, context):
        """Do something
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_SomethingExecutorServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'DoSomething': grpc.unary_unary_rpc_method_handler(
                    servicer.DoSomething,
                    request_deserializer=do__something__pb2.Request.FromString,
                    response_serializer=do__something__pb2.Reply.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'dosomething.SomethingExecutor', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class SomethingExecutor(object):
    """The greeting service definition.
    """

    @staticmethod
    def DoSomething(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/dosomething.SomethingExecutor/DoSomething',
            do__something__pb2.Request.SerializeToString,
            do__something__pb2.Reply.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
