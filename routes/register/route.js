var express = require('express');
var handler = require('./handlers');
var router = express.Router();

/* GET users listing. */
router.post('/', handler.postRegister);

  
  

module.exports = router