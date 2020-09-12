const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

let User = require('../models/user.model')

router.get('/', (req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err))
} )

// @desc get all users
// @access admin
router.post('/', (req, res) => {
  const {name, email, password} = req.body;

  //simple validation
  if (!name || !email || !password) {
    return res.status(400).json({msg: 'All fields are required'})
  }

  User.findOne({email})
    .then(user => {
      if (user) return res.status(400).json({msg: 'User already exists'})

      const newUser = new User({
        name,
        email,
        password
      })

      //create salt && hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash
          newUser.save()
            .then(user => {

              jwt.sign(
                {id: user.id},
                process.env.JWT_SECRET,
                {expiresIn: 3600},
                (err, token) => {
                  if (err) throw  err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      name: user.name,
                      email: user.email
                    }
                  })
                }
              )
            })
        })
      })
    })
});

module.exports = router