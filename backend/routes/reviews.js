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

router.put('/update/:id' ,(req, res) => {
  Review.findById(req.params.id)
    .then(review => {
      review.is_displayed = !review.is_displayed
      review.save()
        .then(() => res.json(review.is_displayed))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router