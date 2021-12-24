import sys
from typing import Tuple

import ffmpeg


# https://github.com/kkroening/ffmpeg-python/blob/master/README.md

def get_resolution(filename: str) -> Tuple[int, int]:
    """get resolution of the video

        ## Returns
        (height:int, width:int)
    """
    obj = ffmpeg.probe(filename)
    # extract height, width
    streams = obj['streams']
    mov_streams = [item for item in streams if item['codec_type'] == 'video']
    try:
        mov_stream = mov_streams[0]
    except KeyError as e:
        print(e)
        sys.exit(1)
    else:
        height = mov_stream['height']
        width = mov_stream['width']
        print(f'h = {height}, w = {width}')
        return height, width


def get_duration(filename: str) -> float:
    """get duration of video

        ## Returns
        duration:float
    """
    obj = ffmpeg.probe(filename)
    streams = obj['streams']
    mov_streams = [item for item in streams if item['codec_type'] == 'video']
    try:
        mov_stream = mov_streams[0]
        duration = float(mov_stream['duration'])
    except KeyError as e:
        print(e)
        sys.exit(1)
    else:
        print(f'duration = {duration} [s] (type: {type(duration)})')
        return duration


if __name__ == "__main__":
    input_fname = "./data/input.mp4"
    get_duration(input_fname)

