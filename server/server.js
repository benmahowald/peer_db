var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongoose = require('mongoose');

var port = process.env.PORT || 2727;
var Grading = require('../models/assignments.js');

var mongoURI = 'mongodb://localhost:27017/assignments';
var MongoDB = mongoose.connect(mongoURI).connection;

var userRouter = require('../routes/studentRoute.js');
app.use(userRouter);


// MongoDB.on('error', function (err) {
//     console.log('mongodb connection error:', err);
// });
//
// MongoDB.once('open', function () {
//   console.log('mongodb connection open!');
// });

// server spin up
app.listen(port, function () {
  console.log('listeningon on port:', port);
});

// base url
app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendStatus(200);
}); // end base url

// app.get('/testAssignments', function(req, res) {
  // var dummy = new Grading({
  //   student_name:
  //     {
  //       firstName: "George ",
  //       lastName: "Washington"
  //     },
  //   assignment_number: 2,
  //   score: 100,
  //   completed: true,
  //   date_completed: new Date()
  // });
//
//   dummy.save(function(err) {
//     if(err){
//       console.log(err);
//       res.sendStatus(500);
//     }
//     else {
//       console.log('save successfully');
//       res.sendStatus(200);
//     }
//   });
// });
