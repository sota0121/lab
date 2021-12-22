#! /bin/zsh

# ref: https://video.stackexchange.com/questions/12105/add-an-image-overlay-in-front-of-video-using-ffmpeg
# -filter_complex:
# | - [0:v][1:v] = input file index
# | - - [0:v] = input.mp4, [1:v] = yt_logo_rgb_light.png
# | - overlay=25:25:enable='between(t,0,20)'
# | - - overlay=25:25:... = origin point x,y (e.g. 25:25 == (x=25px, y=25px) {0,0=left top})
# | - - 'between(t,0,20)' = displaying image from 0s to 20s
# -pix_fmt:
# | yuv420p
ffmpeg -i ./data/input.mp4 -i ./data/yt_logo_rgb_light.png \
-filter_complex "[0:v][1:v] overlay=100:25:enable='between(t,1,10)'" \
-pix_fmt yuv420p -c:a copy \
./data/output.mp4 -y

# ffmpeg -i ./data/input.mp4 -i ./data/yt_logo_rgb_light.png -filter_complex "[0]trim=start_frame=10:end_frame=20[v0];[0]trim=start_frame=30:end_frame=40[v1];[v0][v1]concat=n=2[v2];[1]hflip[v3];[v2][v3]overlay=eof_action=repeat[v4];[v4]drawbox=50:50:120:120:red:t=5[v5]" -map [v5] output.mp4
