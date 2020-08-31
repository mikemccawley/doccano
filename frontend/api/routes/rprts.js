const fs = require('fs')
const express = require('express')
const router = express.Router()
const db = JSON.parse(fs.readFileSync('./api/db/users.json', 'utf8'))

// mmccawley 2020-08-28 ... would do something eventually
router.get('/', (req, res) => {
  res.json('{"test":"value"}')
})

// Get a thing
router.get('/:thingId', (req, res) => {
  res.json('{"test":"value"}')
})

module.exports = router
