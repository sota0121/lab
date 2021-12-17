"""Custom logger utility

    ## Resources
    - https://docs.python.org/ja/3.9/howto/logging-cookbook.html#logging-cookbook
    - https://docs.python.org/ja/3.9/howto/logging.html
    - https://docs.python.org/ja/3.9/library/logging.html?highlight=basicconfig#logging.basicConfig
    - https://docs.python.org/ja/3.9/library/logging.html#logging.getLogger
    - https://docs.python.org/ja/3.9/howto/logging-cookbook.html#formatting-styles
    - https://docs.python.org/ja/3.9/library/logging.html#logging.Formatter
        - https://docs.python.org/ja/3.9/library/stdtypes.html#str.format
        - https://docs.python.org/ja/3.9/library/string.html#formatstrings
"""

from typing import Final
import logging
import sys


LOGGER_NAME_APP1: Final[str] = "APP_1"
LOGGER_NAME_APP2: Final[str] = "APP_2"
LOGGER_NAME_APP3: Final[str] = "APP_3"

# Log Fmt
formatter = logging.Formatter('%(asctime)s:%(name)s:%(levelname)s:%(message)s')

# Common StreamHandler
common_handler = logging.StreamHandler()
common_handler.setLevel(level=logging.DEBUG)
common_handler.setFormatter(formatter)

# SET UP APP1 Logger object
app1_logger = logging.getLogger(LOGGER_NAME_APP1)
app1_logger.setLevel(level=logging.DEBUG) # これがないとログ出力されない
app1_logger.addHandler(common_handler)

# SET UP APP2 Logger object
app2_logger = logging.getLogger(LOGGER_NAME_APP2)
app2_logger.setLevel(level=logging.DEBUG) # これがないとログ出力されない
app2_logger.addHandler(common_handler)


# classification
class MyLoggerWrapper:
    def __init__(self, name: str=None, level: int=logging.DEBUG) -> None:
        # set up handler
        _formatter = logging.Formatter(
            "{'ts':%(asctime)s, 'logger':%(name)s, 'level':%(levelname)s, 'file':%(filename)s, 'module':%(module)s, 'func':%(funcName)s, 'ver_id':%(ver_id)d, 'user_id':%(user_id)d, 'msg':%(message)s}"
        )
        _console_handler = logging.StreamHandler()
        _console_handler.setLevel(level=level)
        _console_handler.setFormatter(_formatter)
        # set up logger
        self._logger = logging.getLogger(name=name)
        self._logger.setLevel(level=level)
        self._logger.addHandler(_console_handler)

    @classmethod
    def extra(cls, ver_id: int, user_id: int):
        """make dict for log(... extra={})

            ### How to use

            ```python
            # my_logger.py
            _logger = MyLoggerWrapper(name='proc_1', level=logging.DEBUG)
            # ---
            # xxx.py
            _logger = logging.getLogger('proc_1')
            ver_id = 1
            user_id = 2
            _logger.info("started to process", extra=MyLoggerWrapper.extra(ver_id, user_id))
            ```


        """
        dict_for_extra = {
            'ver_id': ver_id,
            'user_id': user_id
        }
        return dict_for_extra

    @classmethod
    def fmt_msg_trial(cls, custom: int) -> dict:
        return {'custom': custom}

    @property
    def logger(self):
        return self._logger

app3_logger = MyLoggerWrapper(name=LOGGER_NAME_APP3, level=logging.DEBUG)
