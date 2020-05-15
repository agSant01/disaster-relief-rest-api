var express = require('express');
var handler = require('./handlers');
var router = express.Router();

// GET statistics listing.
router.get('/weekly', handler.getStatisticsWeekly);

// GET statistics listing.
router.get('/daily', handler.getStatisticsDaily);

module.exports = router;
