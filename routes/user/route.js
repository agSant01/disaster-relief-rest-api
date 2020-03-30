var express = require('express');
var handler = require('./handlers');
var router = express.Router();

/* GET users listing. */
router.get('/', handler.getUsers);
router.get('/roles', handler.getRoles);
router.get('/:id/requests', handler.getRequests);
  
  

module.exports = router