var express = require('express');
var handler = require('./handlers');
var router = express.Router();

// Get the types of resources that the system supports
router.get('/types', handler.getTypes);

// Get the attribute of a certain resource type
router.get('/:type/attributes', handler.getResourceTypeAttributes);

// Get available resources
router.get('/available/:provider/:keyword', handler.getAvailable);

// Get all open resource requests
router.get('/requests/:userID/:keyword', handler.getRequests);

// Update
router.put('/:id/update-status', handler.putUpdate);

// Submit resource
router.post('/add', handler.postResource);

// Submit resource request
router.post('/add/request', handler.postResourceRequest);

// Reserve resource
router.post('/reserve', handler.postReserveResource);

// Buy resource
router.post('/buy', handler.postBuyResource);

module.exports = router;
