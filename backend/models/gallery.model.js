const mongoose = require('mongoose')

const Schema = mongoose.Schema

const gallerySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  is_displayed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;