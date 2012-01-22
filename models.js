// Defining all required methodes
var mongoose = require('mongoose');

// Connecting to time-table database
mongoose.connect('mongodb://localhost/timetable');

// Defining Schemas
var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var user = new Schema({
          
})

var course = new Schema({
      _id = ObjectId
   ,  teacher     : String
   ,  creator     : String
   ,  startDate   : Date
   ,  endDate     : Date
   ,  repeat      : {type: Number, default: 7}
   ,  startTime   : Date
   ,  endTime     : Date
   ,   
});

