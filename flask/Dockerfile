FROM python:3.7
MAINTAINER Jonathan D. B. Van Schenck <vanschej@oreongstate.edu>

# Folder in container to dump everything into
WORKDIR /app

# set environment variables
# No pyc write and no buffering STDOUT
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install requirements
RUN pip install --upgrade pip
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

EXPOSE 8000

# Copy source into container
COPY . /app/
