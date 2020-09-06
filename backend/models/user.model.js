const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: '',
    trim: true,
  },
  email: {
    type: String,
    required: true,
    default: '',
    unique: true,
  },
  password: {
    type: String,
    required: true,
    default: '',
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
});


userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', userSchema);

module.exports = User;