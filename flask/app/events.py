from app import socketio
from flask import copy_current_request_context
from flask_socketio import emit, disconnect

@socketio.on('my_event', namespace='/test')
def test_message(message):
    return emit('my_response', {'data': message['data']})

@socketio.on('my_broadcast_event', namespace='/test')
def test_b_message(message):
    return emit('my_response', {'data': message['data']}, broadcast=True)

@socketio.on('connect', namespace='/test')
def test_connect():
    emit('my_resonse', {'data': 'Connected!'})

@socketio.on('disconnect_request', namespace='/test')
def disconnect_request():
    @copy_current_request_context
    def can_disconnect():
        disconnect()
    emit('my_response',
         {'data': 'Disconnected!'},
         callback=can_disconnect)
