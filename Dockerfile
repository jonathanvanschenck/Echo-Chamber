FROM python:3.7
MAINTAINER Jonathan D. B. Van Schenck <vanschej@oreongstate.edu>

WORKDIR /usr/src/app

# set environment variables
# No pyc write and no buffering STDOUT
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

EXPOSE 8000

COPY . /usr/src/app/
