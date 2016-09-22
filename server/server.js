var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var port = process.env.PORT || 4952;


var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

app.use(bodyParser.json());

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

// base route
app.listen(port, function () {
  console.log('listeningon on port:', port);
});

app.get('/assignments', function(req, res) {
  res.sendStatus(200);
}); // end get route
