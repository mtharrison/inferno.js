var express = require('express');
var app = express();

app.use(express.static('css'));
app.use(express.static('js'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

var server = app.listen(3040, function() {
    console.log('Listening on port %d', server.address().port);
});