const jwt = require('jsonwebtoken')

function auth(req, res, next) {
  const token = req.header('x-auth-token')

  //check for token
  if (! token) {
    return res.json({status: 401, message: 'You are unauthorized to perform this action.'})
  }

  try {
    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    //add user from payload
    req.user = decoded
    next()
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid'})
  }
}

module.exports = auth
