"""Exception sample"""


import logging
import sys


def check_how_exception_works():
    try:
        logging.debug("start proc")
        raise ValueError("RAISED something value error in TRY statement")
    except Exception as e:
        logging.debug("Catch exception")
        logging.exception(repr(e))
    finally:
        logging.debug("end proc")
        sys.exit(1)


if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG)
    check_how_exception_works()

