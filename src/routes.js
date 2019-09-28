const express = require('express')

const routes = express.Router()
routes.get('/', (req, res) => {
  return res.send('Bem Vindo Ao Lurpi Barbearia')
})
module.exports = routes
