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

