const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('.')
  .then(() => app.listen(3000))
  .catch(err => console.log(err))