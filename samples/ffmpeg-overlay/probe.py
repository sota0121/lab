import sys

import ffmpeg


obj = ffmpeg.probe('./data/input.mp4')

# get height, width
streams = obj['streams']
mov_streams = [item for item in streams if item['codec_type'] == 'video']
try:
    mov_stream = mov_streams[0]
except KeyError as e:
    print(e)
    sys.exit(1)
height = mov_stream['height']
width = mov_stream['width']
print(f'h = {height}, w = {width}')
