var express = require('express');
var handler = require('./handlers');
var router = express.Router();

// Get all users, only for Admin and System Manager
router.get('/', handler.getUsers);

// Get specific user information
router.get('/:id', handler.getUser);

// Get available roles
router.get('/roles', handler.getRoles);

// Get Requests submited by user
router.get('/:id/requests', handler.getRequests);

module.exports = router;
