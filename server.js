var express = require('express');
var app = express();

app.use(express.static(__dirname + '/assets')); 
app.use(express.static(__dirname + '/app')); 

app.get('/', function (req, res) {
  res.sendFile('index.html',{root: __dirname})
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('laundryWatcher app listening at http://%s:%s', host, port);
});