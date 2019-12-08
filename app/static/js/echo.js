$(document).ready(function() {
    // Select the namespace for socket multiplexing
    namespace = '/test';
    
    // Create socket connection
    var socket = io(namespace);
    
    // Setup Event Handlers
    // Connect
    socket.on('connect', function() {
        socket.emit('my_event', {data: 'I\'m connected'});
    });
    
    // Recieved text
    socket.on('my_response', function(msg, cb) {
        // Create new <div></div> element
        var newmsg = $('<div/>');
        
        // Stick some text into the middle <div>text</div>
        newmsg.text('Received: ' + msg.data);
        
        // Convert the element into HTML text, then attached it to
        //   the <div id='log'> item already in the page in the "contents"
        //   section  
        $('#log').append('<br>' + newmsg.html());
        
        // run cb
        if (cb)
            cb();
        
    });
    
    // Ping
    
    // Forms
    $('form#emit').submit(function(event) {
        socket.emit('my_event', {data: $('#emit_data').val()});
        return false;
    });

    $('form#broadcast').submit(function(event) {
        socket.emit('my_broadcast_event', {data: $('#broadcast_data').val()});
        return false;
    });
    
    $('form#disconnect').submit(function(event) {
        socket.emit('disconnect_request');
        return false;
    });
    
});