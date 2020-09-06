const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors()) //middleware
app.use(express.json()) //allows us to parse json, this used to be the body parser

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once('open', () => {
  console.log(`MongoDB connection properly established.`)
})

const exercisesRouter = require('./routes/exercises')
const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')
const packagesRouter = require('./routes/packages')

app.use('/exercises', exercisesRouter)
app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/packages', packagesRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})