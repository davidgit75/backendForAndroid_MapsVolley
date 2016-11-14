var mongoose = require("mongoose");

var schemaPosition = mongoose.Schema({
  title: String,
  description: String,
  latitude: Number,
  longitude: Number
});

module.exports = mongoose.model('position', schemaPosition, 'position');
