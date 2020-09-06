const mongoose = require('mongoose')

const Schema = mongoose.Schema

const packageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  frame: {
    type: String,
    required: true,
  },
  prenuptial: {
    type: String,
    required: true,
  },
  photographers: {
    type: Number,
    required: true,
  },
  videographers: {
    type: Number,
    required: true,
  },
  lightsmen: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;