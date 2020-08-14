const mongoose = require('mongoose');


const registerSchema = new mongoose.Schema({
    surname:String,
    given_name: String,
    dateofbirth: String,
    placeofresidence: String,
    occupation: String,
    nationality: String,
    gender: String,
    category: String
  });
  module.exports = mongoose.model('Register', registerSchema); 