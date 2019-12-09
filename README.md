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
(venv) $ pip3 install flask
(venv) $ pip3 install flask_socketio
```
or cmd:
```cmd
(venv) > pip install flask
(venv) > pip install flask_socketio
```
### 3) Starting up the server
From the terminal, execute
```bash
(venv) $ flask run
```
or in cmd
```cmd
(venv) > flask run
```
The current setup is "local" which will run the server only on your computer, accessable at http://localhost:5000/ 
