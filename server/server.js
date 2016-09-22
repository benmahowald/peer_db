var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var port = process.env.PORT || 4952;
var Grading = require('../models/assignments.js');

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

app.get('/testAssignments', function(req, res) {
  var dummy = new Grading({
    student_name:
      {
        firstName: "dummy",
        lastName: "head"
      },
    assignment_number: 1,
    score: 100,
    completed: true,
    date_completed: new Date()
  });

  dummy.save(function(err) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    else {
      console.log('save successfully');
      res.sendStatus(200);
    }
  });
});
app.get('/assignments', function(req, res) {
  res.sendStatus(200);
}); // end get route
