var express = require('express');
var app = express();
var http = require('http')
var server = http.Server(app);
var io = require('socket.io')(server);
var path = require('path');

app.use(express.static(__dirname + '/../public'));
app.use(express.static(__dirname + '/../vendor'));

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../public/html/index.html'));
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

server.listen(3000, function(){
    console.log('listening on *:3000');
});

