let socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Victor',
    text: 'this is victor'
  });
});
socket.on('disconnect', function () {
  console.log('Disconnnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});