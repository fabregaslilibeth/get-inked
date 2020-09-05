const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  partner: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  preferred_package: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;