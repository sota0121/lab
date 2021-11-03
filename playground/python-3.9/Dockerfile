FROM python:3.9.7-buster
ENV PYTHONUNBUFFERED=1
COPY ./code/ /code/
WORKDIR /code
RUN pip install -r requirements.txt
CMD [ "/bin/bash" ]
