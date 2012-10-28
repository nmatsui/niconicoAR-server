var socket = io.connect('http://niconicoar.excale.net', {transports: ["xhr-polling"]});
//var socket = io.connect('http://niconicoar.herokuapp.com', {transports: ["xhr-polling"]});
//var socket = io.connect('http://localhost:8080', {transports: ["xhr-polling"]});

$(document).ready(function() {
  var sendButton = $('#sendButton');
  var commentBox = $('#commentBox');
  var comments = $('#comments');

  sendButton.on('click', function(){
    var data = commentBox.val();
    console.log("sndButton click (comment -> %o)", data);
    socket.emit('comment', data);
  });

  socket.on('broadcast', function(data){
    console.log("broadcast receive -> %o", data);
    comments.append("<li>" + data + "</li>");
  });
});
