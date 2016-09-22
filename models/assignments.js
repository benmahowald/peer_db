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
  date_completed: Date
});

var Grading = mongoose.model('gradings', Assignments);
module.exports = Grading;
