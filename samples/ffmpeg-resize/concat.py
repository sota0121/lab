"""Concat

    - 異なる解像度の動画を結合する方法

"""
from email.mime import audio
import re
import sys
from typing import Tuple, Final, List

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


def pathes_from_chunklist(chunklist_name: str) -> List[str]:
    """get file pathes from chunklist"""
    pathes = []
    with open(chunklist_name, 'r') as f:
        fn_lines = [l for l in f.read().splitlines() if l.startswith('file')]
        pathes = [re.findall('\'([^"]*)\'', l)[0] for l in fn_lines]
    return pathes

def chunklist_to_streams(chunklist_name: str) -> list:
    """parse chunklist and get ffmpeg streams"""
    # parse chunklist
    pathes = pathes_from_chunklist(chunklist_name)
    streams = [ffmpeg.input('./data/' + p) for p in pathes]
    return streams


def scale_video(in_video_filepath: str, width: int, height: int, out_video_filepath: str):
    """scale video with the specific width/height"""
    print(f"in: {in_video_filepath}\nw: {width}\nh: {height}\nout: {out_video_filepath}")
    in_mov = ffmpeg.input(in_video_filepath)
    (
        ffmpeg
        .filter(in_mov.video, 'scale', w=width, h=height)
        .concat(in_mov.audio, v=1, a=1)
        .output(out_video_filepath)
        .overwrite_output()
        .run()
    )
    print("done")


def overlay_from_chunklist(chunklist_name: str, in_overlay_img_name: str, org_x: int, org_y: int):
    streams = chunklist_to_streams(chunklist_name)

    in_file = (
        ffmpeg
        .filter('scale', 1280, -1)
        .concat(*streams)
    )
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
    # mov_h, mov_w = get_resolution(input_mov_name)
    # img_h, img_w = get_resolution(input_overlay_img_name)

    # select scale of output
    o_w, o_h = 1280, 720
    out_res = {'h': o_h, 'w': o_w}
    # out_height = int(input("h >> "))
    # out_width = int(input("w >> "))

    print("get file properties from chunklist\n=====================")
    pathes = pathes_from_chunklist(input_chunklist_name)
    root_path = "./data"
    rel_pathes = [f"{root_path}/{s}" for s in pathes]
    in_reses = []
    for s in rel_pathes:
        print(s)
        h, w = get_resolution(s)
        print("=====================")
        _res = {'h': h, 'w': w}
        in_reses.append(_res)
    print()
    #org_x, org_y = calc_org_point(in_pos, mov_h, mov_w, img_h, img_w)

    print("Unify all movies resolusion\n=====================")
    target_pathes = []
    _suffix = f"_uni{o_w}x{o_h}.mp4"
    for p, r in zip(rel_pathes, in_reses):
        if out_res == r:
            _w, _h = r['w'], r['h']
            print(f"do not have to change resolution\nin: (w: {_w}, h: {_h})")
            target_pathes.append(p)
            continue
        out_p = p + _suffix
        #scale_video(p, out_res['w'], out_res['h'], out_p)
        target_pathes.append(out_p)

    print("Concat all unified movies\n=====================")
    [print(tp) for tp in target_pathes]
    _chunklist_mod = "./data/chunklist_mod.txt"
    #_streams = [ffmpeg.input(p) for p in target_pathes]
    (
        ffmpeg
        #.concat(*_streams)
        .input(_chunklist_mod, f="concat", safe=0)
        .output('./data/output-from-py-con.mp4', c="copy")
        .overwrite_output()
        .run()
    )

    #overlay(input_mov_name, input_overlay_img_name, org_x, org_y)
    #overlay_from_chunklist(input_chunklist_name, input_overlay_img_name, org_x, org_y)


if __name__ == "__main__":
    main()