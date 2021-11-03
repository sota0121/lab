"""entrypoint
"""
import sys

if __name__ == "__main__":
    args = sys.argv
    arg1 = args[1] if len(args) > 1 else ""
    print(f"hello world : {arg1}")
