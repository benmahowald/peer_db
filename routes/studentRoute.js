var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Assignments = require('../models/assignments.js');


router.get('/assignments', function (req, res) {

  Assignments.find({}, function(err, assignmentResults) {
    if (err) {
      console.log('didn"t anything lozah' );
      res.sendStatus(500);
    } else {
      res.send(assignmentResults);
    }
  }); // end grading find()
}); // end get route

module.exports = router;
