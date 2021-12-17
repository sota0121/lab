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
LOGGER_NAME_APP4: Final[str] = "APP_4"

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



# classification v2 (make sub class)
class MyLogger(logging.getLoggerClass()):
    """Custom Logger Class"""
    def __init__(self, name: str, level: int = ...) -> None:
        super().__init__(name, level=level)
        self.prj_ver_id = -1
        self.user_id = -1

    def update_prj_ver_id(self, prj_ver_id: int):
        self.prj_ver_id = prj_ver_id

    def update_user_id(self, user_id: int):
        self.user_id = user_id

    def update_id(self, prj_ver_id: int, user_id: int):
        self.update_prj_ver_id(prj_ver_id)
        self.update_user_id(user_id)

    def extra(self):
        """make extra dict"""
        extra = {
            'prj_ver_id': self.prj_ver_id,
            'user_id': self.user_id
        }
        return extra

    def debug(self, msg, *args, **kwargs):
        """Over ride
        Log 'msg % args' with severity 'DEBUG'.

        To pass exception information, use the keyword argument exc_info with
        a true value, e.g.

        logger.debug("Houston, we have a %s", "thorny problem", exc_info=1)
        """
        if self.isEnabledFor(logging.DEBUG):
            self._log(logging.DEBUG, msg, args, **kwargs, extra=self.extra())

    def info(self, msg, *args, **kwargs):
        """Over ride
        Log 'msg % args' with severity 'INFO'.

        To pass exception information, use the keyword argument exc_info with
        a true value, e.g.

        logger.info("Houston, we have a %s", "interesting problem", exc_info=1)
        """
        if self.isEnabledFor(logging.INFO):
            self._log(logging.INFO, msg, args, **kwargs, extra=self.extra())

    def warning(self, msg, *args, **kwargs):
        """
        Log 'msg % args' with severity 'WARNING'.

        To pass exception information, use the keyword argument exc_info with
        a true value, e.g.

        logger.warning("Houston, we have a %s", "bit of a problem", exc_info=1)
        """
        if self.isEnabledFor(logging.WARNING):
            self._log(logging.WARNING, msg, args, **kwargs, extra=self.extra())

    def error(self, msg, *args, **kwargs):
        """
        Log 'msg % args' with severity 'ERROR'.

        To pass exception information, use the keyword argument exc_info with
        a true value, e.g.

        logger.error("Houston, we have a %s", "major problem", exc_info=1)
        """
        if self.isEnabledFor(logging.ERROR):
            self._log(logging.ERROR, msg, args, **kwargs, extra=self.extra())

    def exception(self, msg, *args, exc_info=True, **kwargs):
        """
        Convenience method for logging an ERROR with exception information.
        """
        self.error(msg, *args, exc_info=exc_info, **kwargs, extra=self.extra())

    def critical(self, msg, *args, **kwargs):
        """
        Log 'msg % args' with severity 'CRITICAL'.

        To pass exception information, use the keyword argument exc_info with
        a true value, e.g.

        logger.critical("Houston, we have a %s", "major disaster", exc_info=1)
        """
        if self.isEnabledFor(logging.CRITICAL):
            self._log(logging.CRITICAL, msg, args, **kwargs, extra=self.extra())

class MyLoggerSetUpper:
    """Custom Logger Factory"""
    def __init__(self, name: str=None, level: int=logging.DEBUG) -> None:
        self.name = name
        self.level = level

    def create_logger(self) -> MyLogger:
        # Set up handler
        # fmt - dict object style (json style)
        _formatter = logging.Formatter(
            "{'ts':%(asctime)s, 'logger':%(name)s, 'level':%(levelname)s, 'file':%(filename)s, 'module':%(module)s, 'func':%(funcName)s, 'prj_ver_id':%(prj_ver_id)d, 'user_id':%(user_id)d, 'msg':%(message)s}"
        )
        _console_handler = logging.StreamHandler()
        _console_handler.setLevel(self.level)
        _console_handler.setFormatter(_formatter)
        # Set up logger
        self._logger = MyLogger(name=self.name, level=self.level)
        self._logger.addHandler(_console_handler)
        return self._logger



app4_logger = MyLoggerSetUpper(name=LOGGER_NAME_APP4, level=logging.DEBUG).create_logger()

