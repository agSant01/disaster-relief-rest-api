var express = require('express');
var handler = require('./handlers');
var router = express.Router();

// Get all users, only for Admin and System Manager
router.get('/', handler.getAllUsers);

// Get all users, only for Admin and System Manager
router.get('/administrators', handler.getAdministrators);

// Add new addministrator
router.post('/:roleType', handler.registerUser);

// Get available roles
router.get('/roles', handler.getRoles);

// Get specific user information
router.get('/:id', handler.getUser);

// Get Requests submited by user
router.get('/:id/requests', handler.getRequests);

// Get reserved by user
router.get('/:id/reserves', handler.getReserves);

// Get reserved by user
router.get('/:id/purchases/:purchaseid?', handler.getUserOrders);

module.exports = router;
