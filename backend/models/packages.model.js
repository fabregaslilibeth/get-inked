const mongoose = require('mongoose')

const Schema = mongoose.Schema

const packageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: false,
  },
  video: {
    type: String,
    required: false,
  },
  frame: {
    type: String,
    required: false,
  },
  prenuptial: {
    type: String,
    required: false,
  },
  photographers: {
    type: Number,
    required: false,
  },
  videographers: {
    type: Number,
    required: false,
  },
  lightsmen: {
    type: Number,
    required: false,
  },
}, {
  timestamps: true
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;