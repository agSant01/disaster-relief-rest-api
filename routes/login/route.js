var express = require('express');
var handler = require('./handlers');
var router = express.Router();

//login opperations
router.post('/', handler.postLogin);

module.exports = router