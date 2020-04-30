# Echo-Chamber
A simple echo chamber, basically a recipe for adding realtime updates to a webpage.
Also, it includes examples of using `nginx` and `docker` in a slightly more
complicated situation (like serving static files directly via `nginx`).
----
## Running (Docker)
If you are set up with `docker`, then do this:
```bash
 $ sudo docker-compose build
 $ sudo docker-compose up
```
Then, it is accessible from http://localhost/

Alternatively, if you have your firewall setup properly, you can access the site
from other computers on the same network.

## Development
If you want to do development, it is WAY easier to do it directly with the
`gunicorn` server (not fussing with `docker` or `nginx`), so follow these steps:
### 1) Create a new python 3.7+ virtual environment
Move into the `./flask` folder and create a python virtual environment:
```bash
$ cd flask
$ python3 -m venv venv
```
or on windows cmd
```cmd
> cd flask
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
Next, use pip to install flask and the required dependencies: `flask`, `flask_socketio`
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
(venv) $ gunicorn wsgi --worker-class gevent --bind localhost:8000
```
The current setup is "local" which will run the server only on your computer, accessible at http://localhost:8000/ .

### 4) Have fun!
You can now change any of the source code in `./flask/app` then restart the
`gunicorn` server.
