# Echo-Chamber
A simple echo chamber, basically a recipe for adding realtime updates to a webpage
----
## Setting up flask to run
### 1) Create a new python 3.5+ virtual environment
This can be acomplished in bash
```bash
$ python3 -m venv venv
```
or on windows cmd
```cmd
> python -m venv venv
```
Next, activate the virtual environment from the terminal, in bash:
```bash
$ ./venv/bin/activate
(venv) $
```
or cmd:
```cmd
> venv\Scripts\activate
(venv) >
```
### 2) Set up the virtual environment to run flask
Next, use pip to install flask and the required dependances: flask, flask_socketio
e.g. on bash
```bash
(venv) $ pip3 install -r requirements.txt
```
or cmd:
```cmd
(venv) > pip install -r requirements.txt
```
### 3) Starting up the server
From the terminal, execute
```bash
(venv) $ gunicorn wsgi --worker-class gevent -w 1 --bind localhost:8000 --reload
```
The current setup is "local" which will run the server only on your computer, accessable at http://localhost:8000/ . You can check the flask documentation for more details on how to run the server on a network https://flask.palletsprojects.com/en/1.1.x/ .

## Docker
If you are set up with docker, then do this:
```bash
 $ sudo docker-compose build
 $ sudo docker-compose up
```
Then, we are accessable from http://localhost:8000/
