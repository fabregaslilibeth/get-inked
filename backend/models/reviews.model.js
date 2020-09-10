const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  is_displayed: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;