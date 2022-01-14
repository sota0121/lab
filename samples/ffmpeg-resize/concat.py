"""Concat

    - 異なる解像度の動画を結合する方法

"""
import re
import sys
from typing import Tuple, Final

import ffmpeg

BUFF_IMG_PX: Final[int] = 25

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


def calc_org_point(pos_type: int, base_h: int, base_w: int, over_h: int, over_w: int) -> Tuple[int, int]:
    """calc_org_point

        ## Returns
        (x:int, y:int)

        ## Note
        - origin(x=0, y=0) means top left of the base video
    """
    buff = BUFF_IMG_PX # buffer in px
    x = 0 + buff
    y = 0 + buff
    if pos_type == 0: # top left
        pass
    elif pos_type == 1: # top right
        x = base_w - (over_w + buff)
    elif pos_type == 2: # bottom left
        y = base_h - (over_h + buff)
    elif pos_type == 3: # bottom right
        x = base_w - (over_w + buff)
        y = base_h - (over_h + buff)
    else:
        raise TypeError("pos_type must be between 0 and 3")
    return x, y

def overlay(in_mov_name: str, in_overlay_img_name: str, org_x: int, org_y: int):
    in_file = ffmpeg.input(in_mov_name)
    overlay_file = ffmpeg.input(in_overlay_img_name)
    (
        ffmpeg
        .overlay(in_file, overlay_file, x=org_x, y=org_y, eof_action='repeat', format='yuv420')
        .output('./data/output-from-py.mp4')
        .overwrite_output()
        .run()
    )
    print("end overlay()")

def overlay_from_chunklist(chunklist_name: str, in_overlay_img_name: str, org_x: int, org_y: int):
    # parse chunklist
    streams = []
    with open(chunklist_name, 'r') as f:
        fn_lines = [l for l in f.read().splitlines() if l.startswith('file')]
        pathes = [re.findall('\'([^"]*)\'', l)[0] for l in fn_lines]
        streams = [ffmpeg.input('./data/' + p) for p in pathes]

    in_file = ffmpeg.concat(*streams)
    overlay_file = ffmpeg.input(in_overlay_img_name)
    ret = (
        ffmpeg
        .overlay(in_file, overlay_file, x=org_x, y=org_y, eof_action='repeat', format='yuv420')
        .output('./data/output-from-py-con.mp4')
        .overwrite_output()
        .run()
    )
    print("print ret = ", ret)


def main():
    input_mov_name = './data/hikakin_1280x720_1min.mp4'
    input_overlay_img_name = './data/yt_logo_rgb_light.png'
    input_chunklist_name = './data/chunklist.txt'
    # get height, width
    mov_h, mov_w = get_resolution(input_mov_name)
    img_h, img_w = get_resolution(input_overlay_img_name)

    # select where img is overlaid
    print("select position")
    print("------------------")
    print("|        |       |")
    print("|   0    |   1   |")
    print("|        |       |")
    print("------------------")
    print("|        |       |")
    print("|   2    |   3   |")
    print("|        |       |")
    print("------------------")
    print("[0]: top left")
    print("[1]: top right")
    print("[2]: bottom left")
    print("[3]: bottom right")
    in_pos = int(input('select [0-3] >>'))
    in_pos = in_pos if (0 <= in_pos) and (in_pos <= 3) else 0

    org_x, org_y = calc_org_point(in_pos, mov_h, mov_w, img_h, img_w)

    #overlay(input_mov_name, input_overlay_img_name, org_x, org_y)
    overlay_from_chunklist(input_chunklist_name, input_overlay_img_name, org_x, org_y)


if __name__ == "__main__":
    main()