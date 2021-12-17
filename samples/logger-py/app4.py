"""app 1"""

import logging
import sys
import time

from my_logger import *


def main():
    app4_logger.info("start main app4")
    _index = 0
    try:
        while True:
            time.sleep(1)
            app4_logger.info(f"proc {_index} has done.")
            _index += 1
    except KeyboardInterrupt as e:
        app4_logger.info("Pressed Cntrl+C. Terminate process.")
        sys.exit(0)


if __name__ == "__main__":
    app4_logger.update_id(1, 2)
    main()
