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
    author      
});
