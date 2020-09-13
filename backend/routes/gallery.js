const router = require('express').Router()
let Gallery = require('../models/gallery.model')
const auth = require('../middleware/auth')

router.get('/', (req, res) => {
  Gallery.find()
    .then(packages => res.json(packages))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/', (req, res) => {
  const {title, url, is_displayed, isAdmin } = req.body

  if (!isAdmin) {
    return res.json({status: 404, message: 'You are unauthorized to add a new package.'})
  }

  if (!title || !url ) {
    return res.json({status: 404, message: 'All fields are required.'})
  }

  const newGallery = new Gallery({
    title,
    url,
  })

  newGallery.save()
    .then(() => res.json('New image added.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  Gallery.findByIdAndDelete(req.params.id)
    .then(() => res.json('Image deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.put('/update/:id', (req, res) => {
  Gallery.findById(req.params.id)
    .then(image => {
      image.title = req.body.title
      image.url = req.body.url

      image.save()
        .then(() => res.json('Image updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

router.put('/display/:id', (req, res) => {
  Gallery.findById(req.params.id)
    .then(image => {
      image.is_displayed = !image.is_displayed

      image.save()
        .then(() => res.json(image.is_displayed))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})


router.delete('/:id', (req, res) => {
  Gallery.findByIdAndDelete(req.params.id)
    .then(() => res.json('Image deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router