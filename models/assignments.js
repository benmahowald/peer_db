var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Assignments = new Schema ({
  student_name:
    {
      firstName: String,
      lastName: String
    },
  assignment_number: Number,
  score: Number,
  completed: Boolean,
  date_completed: String
});

var Grading = mongoose.model('gradings', Assignments);
module.exports = Grading;
