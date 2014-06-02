var express = require('express');
var app = express();

app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendfile('examples/index.html');
});

app.get('/min', function(req, res){
  res.sendfile('examples/index-min.html');
});

app.get('/web', function(req, res){
  res.sendfile('examples/website.html');
});

var server = app.listen(3040, function() {
    console.log('Listening on port %d', server.address().port);
});