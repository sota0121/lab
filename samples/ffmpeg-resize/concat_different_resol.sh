#! /bin/bash

# See:
# https://gist.github.com/edsu/6be2d12042ac7bd7a3c0dff6582414e8

if [ "$#" -ne 2 ]; then
    echo "Usage: ./concat_different_resol.sh VIDEO1_PATH VIDEO2_PATH"
    echo "   eg: ./concat_different_resol.sh v1.mp4 v2.mp4"
    exit
fi

video1=$1
video2=$2

# concatenate two videos with different resolution
ffmpeg -i $video1 -i $video2 -filter_complex "[0]scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1[v0];[1]scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1[v1];[v0][0:a:0][v1][1:a:0]concat=n=2:v=1:a=1[v][a]" -map "[v]" -map "[a]" concat.mp4

# I tryed command above, but output.mp4 has only audio data.
# I got ... a large amount of "frame duplication too large, skipping" Errors.

