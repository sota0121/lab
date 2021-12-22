import ffmpeg


# https://github.com/kkroening/ffmpeg-python/blob/master/README.md

in_file = ffmpeg.input('./data/input.mp4')
overlay_file = ffmpeg.input('./data/yt_logo_rgb_light.png')
(
    ffmpeg
    .overlay(in_file, overlay_file, x=25, y=25, eof_action='repeat', format='yuv420')
    .output('./data/output-from-py.mp4')
    .run()
)
