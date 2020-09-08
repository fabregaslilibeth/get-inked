const router = require('express').Router()
let Package = require('../models/packages.model')
const auth = require('../middleware/auth')

router.route('/').get((req, res) => {
  Package.find()
    .then(packages => res.json(packages))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const name = req.body.name
  const album = req.body.album
  const video = req.body.video
  const frame = req.body.frame
  const prenuptial = req.body.prenuptial
  const photographers = req.body.photographers
  const videographers = req.body.videographers
  const lightsmen = req.body.lightsmen

  const newPackage = new Package({
    name,
    album,
    video,
    frame,
    prenuptial,
    photographers,
    videographers,
    lightsmen
  })

  newPackage.save()
    .then(() => res.json('New package added.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  Package.findById(req.params.id)
    .then(package => res.json(package))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  Package.findByIdAndDelete(req.params.id)
    .then(() => res.json('Package deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/update/:id', auth, (req, res) => {
  Package.findById(req.params.id)
    .then(packge => {
      packge.name = req.body.packge.name
      packge.album = req.body.packge.album
      packge.video = req.body.packge.video
      packge.frame = req.body.packge.frame
      packge.prenuptial = 'req.body.packge.prenuptial'
      packge.photographers = Number(req.body.packge.photographers)
      packge.videographers = Number(req.body.packge.videographers)
      packge.lightsmen = Number(req.body.packge.lightsmen)

      packge.save()
        .then(() => res.json('Package updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router