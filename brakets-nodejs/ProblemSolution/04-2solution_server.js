var net = require('net');

var server = net.createServer(function(client) {
    console.log('Client connected');
    
    client.on('data', function(data) {
        client.write(data);
        console.log('Client sent ' + data.toString());
    });
    
    client.on('end', function() {
        console.log('Client disconnected');
    });
    
    
});

server.listen(3000, function() {
    console.log('Server listening for connection');
});

