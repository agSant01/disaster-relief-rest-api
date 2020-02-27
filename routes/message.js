var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  let msg = { msg: "Front-end of Disaster Relief Site!" }
  res.json(msg).end()
})

module.exports = router
