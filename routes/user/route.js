var express = require('express');
var handler = require('./handlers');
var router = express.Router();

// Get all users, only for Admin and System Manager
// supports debug
router.get('/', handler.getAllUsers);

//enable or disable user
router.post('/toggle', handler.toggle);

// Get all users, only for Admin and System Manager
// supports debug
router.get('/administrators', handler.getAdministrators);

// Get available roles
router.get('/roles', handler.getRoles);

// Get specific user information
router.get('/:id', handler.getUserById);

// Get Requests submited by user
router.get('/:id/requests', handler.getRequestsByUser);

// Get reserved by user
router.get('/:id/reserves', handler.getReservesByUser);

// Get reserved by user
router.get('/:id/purchases/:purchaseid?', handler.getUserOrders);

// Add new user
router.post('/:roleType', handler.registerUser);

module.exports = router;
