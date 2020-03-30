var express = require('express');
var handler = require('./handlers');
var router = express.Router();

/* GET users listing. */
router.get('/types', handler.getTypes);
router.get('/available/:provider/:keyword', handler.getAvailable);
router.get('/requests/:userID/:provider/keyword', handler.getRequests);
router.put('/:id/update-status', handler.putUpdate);
  

module.exports = router