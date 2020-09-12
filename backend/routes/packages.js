const router = require('express').Router()
let Package = require('../models/packages.model')
const auth = require('../middleware/auth')

router.route('/').get((req, res) => {
  Package.find()
    .then(packages => res.json(packages))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/', (req, res) => {
  const {userId, isAdmin, name, description} = req.body

  if (!userId) {
    return res.json({status: 404, message: 'Please make sure to login first.'})
  }

  if (!isAdmin) {
    return res.json({status: 404, message: 'You are unauthorized to add a new package.'})
  }

  if (!name || !description ) {
    return res.json({status: 404, message: 'All fields are required.'})
  }

  const newPackage = new Package({
    name,
    description,
  })

  newPackage.save()
    .then(() => res.json('New package added.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  Package.findByIdAndDelete(req.params.id)
    .then(() => res.json('Package deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.put('/update/:id', (req, res) => {
  Package.findById(req.params.id)
    .then(service => {
      service.name = req.body.name
      service.description = req.body.description

      service.save()
        .then(() => res.json('Package updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})


router.delete('/:id', (req, res) => {
  Package.findByIdAndDelete(req.params.id)
    .then(() => res.json('Package deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})



module.exports = router