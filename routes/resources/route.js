var express = require('express');
var handler = require('./handlers');
var router = express.Router();

// Get the types of resources that the system supports
router.get('/types', handler.getTypes);

// Get the attribute of a certain resource type
router.get('/types/:id', handler.getResourceTypeAttributes);

// Get all purchases
router.get('/purchase/:ID?', handler.getPurchase);

// Get available resources
router.get('/available/:provider?', handler.getResourcesAvailable);

// Get all open resource requests
router.get('/requests/:id?', handler.getRequests);

// Get reserved resource
router.get('/reserves/:reserveid?', handler.getAllReservedResource);

// Get all resources
router.get('/:ID?', handler.getAllResources);

// Get the attribute by type
router.get('/:types/attributes', handler.getResourceAttributesByType);

// Update
router.put('/:id/update-status', handler.putUpdate);

// Submit resource
router.post('/add', handler.postResource);

// Submit resource request
router.post('/add/request', handler.postResourceRequest);

// Reserve resource
router.post('/reserves', handler.postReserveResource);

// Buy resource
router.post('/buy', handler.postBuyResource);

module.exports = router;
