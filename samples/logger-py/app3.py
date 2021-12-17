"""app 1"""

import logging
import sys
import time

from my_logger import *


_logger = logging.getLogger(LOGGER_NAME_APP3)

def main():
    _logger.info("start main app3", extra=MyLoggerWrapper.extra(1, 2))
    _index = 0
    try:
        while True:
            time.sleep(1)
            _logger.info(f"proc {_index} has done.", extra=MyLoggerWrapper.extra(3, 4))
            # _logger.info(f"proc {_index} has done. (does not exist EXTRA key args)") # ValueEror
            _index += 1
    except KeyboardInterrupt as e:
        _logger.info("Pressed Cntrl+C. Terminate process.", extra=MyLoggerWrapper.extra(5, 6))
        sys.exit(0)


if __name__ == "__main__":
    # logging.basicConfig(level=logging.DEBUG)
    # _logger.debug("hey")
    main()
