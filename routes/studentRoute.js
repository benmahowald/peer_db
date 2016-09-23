var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Assignments = require('../models/assignments.js');


router.get('/assignments/:id?', function (req, res) {
  console.log('req params:', req.params);
  if (req.params.id) {
  Assignments.find({'_id': req.params.id}, function(err, student) {
    if (err) {
      console.log('didn"t do anything lozah' );
      res.sendStatus(500);
    }else {
      res.send(student);
    }
  }); // end grading find()
} // end of if
  else{ Assignments.find({}, function (err, assignmentResults){
    if (err) {
      console.log('didn"t do anything lozah' );
      res.sendStatus(500);
    } else {
      res.send(assignmentResults);
    }
  }); // end find all
} // end of else
}); // end get route

router.post('/createStudent', function(req, res) {
  console.log('post route hit');
}); // end post route

module.exports = router;
