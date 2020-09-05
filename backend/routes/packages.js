const router = require('express').Router()
let Package = require('../models/packages.model')

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


router.route('/update/:id').post((req, res) => {
  Package.findById(req.params.id)
    .then(packge => {
      packge.name = req.body.name
      packge.album = req.body.album
      packge.video = req.body.video
      packge.frame = req.body.frame
      packge.prenuptial = req.body.prenuptial
      packge.photographers = Number(req.body.photographers)
      packge.videographers = Number(req.body.videographers)
      packge.lightsmen = Number(req.body.lightsmen)

      packge.save()
        .then(() => res.json('Package updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router