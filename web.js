var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var responseBuff = fs.readFileSync('index.html')
  response.send(responseBuff.toString());
//  response.send('Hello World2!');
});

var port = process.env.PORT || 8080; /// was 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

