#! /bin/zsh

# ref: https://video.stackexchange.com/questions/12105/add-an-image-overlay-in-front-of-video-using-ffmpeg
ffmpeg -i ./data/input.mp4 -i ./data/yt_logo_rgb_light.png \
-filter_complex "[0:v][1:v] overlay=25:25:enable='between(t,0,20)'" \
-pix_fmt yuv420p -c:a copy \
output.mp4

# ffmpeg -i ./data/input.mp4 -i ./data/yt_logo_rgb_light.png -filter_complex "[0]trim=start_frame=10:end_frame=20[v0];[0]trim=start_frame=30:end_frame=40[v1];[v0][v1]concat=n=2[v2];[1]hflip[v3];[v2][v3]overlay=eof_action=repeat[v4];[v4]drawbox=50:50:120:120:red:t=5[v5]" -map [v5] output.mp4
