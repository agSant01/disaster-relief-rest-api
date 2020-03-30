var express = require('express');
var handler = require('./handlers');
var router = express.Router();

//get providers list
router.get('/', handler.getProviders);

module.exports = router