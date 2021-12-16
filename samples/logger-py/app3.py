"""app 1"""

import logging
import sys
import time

import my_logger


_logger = logging.getLogger(my_logger.LOGGER_NAME_APP3)

def main():
    _logger.info("start main app3")
    _index = 0
    try:
        while True:
            time.sleep(1)
            _logger.info(f"proc {_index} has done.")
            _index += 1
    except KeyboardInterrupt as e:
        _logger.info("Pressed Cntrl+C. Terminate process.")
        sys.exit(0)


if __name__ == "__main__":
    # logging.basicConfig(level=logging.DEBUG)
    # _logger.debug("hey")
    main()
