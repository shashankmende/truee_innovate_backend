
const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Please fill a valid 10-digit phone number']
  },
  email: {
    type: String,
    required: true,
    // unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address']
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true
  },
  experience: {
    type: Number,
    required: true,
    min: 0 
  },
  skills: {
    type: [String],
    required: true,
    validate: {
      validator: function(array) {
        return array.length > 0;
      },
      message: "Skills array should contain at least one skill."
    }
  }
});

const Candidate = mongoose.model('Candidate', CandidateSchema);
module.exports = Candidate;
