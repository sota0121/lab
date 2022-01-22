import ffmpeg

# https://stackoverflow.com/questions/56973205/how-to-combine-the-video-and-audio-files-in-ffmpeg-python

input_video = ffmpeg.input("./data/input_bare.mp4")
input_audio = ffmpeg.input("./data/input.mp3")

(
    ffmpeg
    .concat(input_video, input_audio)
)
