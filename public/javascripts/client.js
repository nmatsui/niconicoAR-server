var socket = io.connect('http://niconicoar.excale.net', {transports: ["xhr-polling"]});
//var socket = io.connect('http://localhost:8080', {transports: ["xhr-polling"]});

$(document).ready(function() {
  var sendButton = $('#sendButton');
  var messageBox = $('#messageBox');
  var messages = $('#messages');

  sendButton.on('click', function(){
    var data = messageBox.val();
    console.log("sndButton click (message -> %o)", data);
    socket.emit('message', data);
    messageBox.val("");
  });

  socket.on('broadcast', function(data){
    console.log("broadcast receive -> %o", data);
    messages.append("<li>" + data + "</li>");
  });
});
