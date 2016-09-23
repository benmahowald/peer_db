var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Assignments = require('../models/assignments.js');

router.get('/assignments/:id?', function (req, res) {
  console.log('req params:', req.params);
  if (req.params.id) {
    Assignments.find({ '_id': req.params.id }, function (err, student) {
      if (err) {
        console.log('didn"t do anything lozah');
        res.sendStatus(500);
      }else {
        res.send(student);
      }
    }); // end grading find()
  } else {
    Assignments.find({}, function (err, assignmentResults) {
      if (err) {
        console.log('didn"t do anything lozah');
        res.sendStatus(500);
      } else {
        res.send(assignmentResults);
      }
    }); // end find all
  } // end of else
}); // end get route

router.post('/createStudent', function (req, res) {
  console.log('post route hit');
  console.log(req.body);
  var data = req.body;
  console.log(data);
  var newAssignment = new Assignments({
    student_name:
        {
          firstName: data.student_name.firstName,
          lastName: data.student_name.lastName,
        },
    assignment_number: data.assignment_number,
    score: data.score,
    completed: data.completed,
    date_completed: data.date_completed,
  }); // end new Assignment

  newAssignment.save(function (err) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log('save successfully');
        res.sendStatus(200);
      }
    });
}); // end post route

module.exports = router;
