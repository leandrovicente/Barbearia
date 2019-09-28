const express = require('express')

const routes = express.Router()
routes.get('/', (req, res) => {
  return res.send('Bem Vindo ao Lurpi Barber')
})
module.exports = routes
