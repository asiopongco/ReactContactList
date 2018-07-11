var mongoose = require('mongoose');
var ContactSchema = mongoose.Schema({
  name:{
    type: String,
  },
  phone:{
    type: String,
  },
  birthday:{
    type: String,
  }
});

module.exports = mongoose.model('Contact', ContactSchema);
