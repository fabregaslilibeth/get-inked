const router = require('express').Router()
let Review = require('../models/reviews.model')

router.get('/', (req, res) => {
  Review.find()
    .then(packages => res.json(packages))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/', (req, res) => {
  const {userId, title, message} = req.body;

  //simple validation
  if (!title || !message) {
    return res.json({status: 404, message: 'All fields are required.'})
  }

  const newReview = new Review({
    userId,
    title,
    message,
  })

  newReview.save()
    .then(() => res.json('New Review added.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router