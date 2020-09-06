const router = require('express').Router()
let Contact = require('../models/contact.model')

router.route('/').get((req, res) => {
  Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const name = req.body.name
  const partner = req.body.partner
  const preferred_package = req.body.preferred_package
  const date = req.body.date
  const mobile = req.body.mobile
  const message = req.body.message

  const newContact = new Contact({
    name,
    partner,
    preferred_package,
    date,
    mobile,
    message,
  })

  newContact.save()
    .then(() => res.json('New contact added.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  Contact.findById(req.params.id)
    .then(contact => res.json(contact))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then(() => res.json('Contact deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  Contact.findById(req.params.id)
    .then(contact => {
      contact.name = req.body.name
      contact.partner = req.body.partner
      contact.preferred_package = req.body.preferred_package
      contact.mobile = Number(req.body.mobile)
      contact.message = Number(req.body.message)
      contact.date = Date.parse(req.body.date)

      contact.save()
        .then(() => res.json('Contact updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router