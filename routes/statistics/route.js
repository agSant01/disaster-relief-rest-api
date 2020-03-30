var express = require('express');
var handler = require('./handlers');
var router = express.Router();

// GET statistics listing.
router.get('/', handler.getStatistics);

module.exports = router