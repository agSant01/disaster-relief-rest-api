var express = require('express');
var handler = require('./handlers');
var router = express.Router();

// Get all resources
router.get('/', handler.getAllResources);

// Get all resources
router.get('/:id', handler.getResourceById);

// Get the types of resources that the system supports
router.get('/types', handler.getTypes);

// Get the attribute of a certain resource type
router.get('/types/:id', handler.getResourceTypeAttributes);

// Get available resources
router.get('/available/:provider?/:keyword?', handler.getResourcesAvailable);

// Get all open resource requests
router.get('/req', handler.getRequests);

router.get('/requests/:keyword', handler.getRequestsByKeyword);

// Update
router.put('/:id/update-status', handler.putUpdate);

// Submit resource
router.post('/add', handler.postResource);

// Submit resource request
router.post('/add/request', handler.postResourceRequest);

// Get reserved resource
router.get('/reserve', handler.getAllReservedResource);

// Reserve resource
router.get('/reserve/:reserveid', handler.getReservedResourceById);

// Reserve resource
router.post('/reserve', handler.postReserveResource);

// Buy resource
router.post('/buy', handler.postBuyResource);

module.exports = router;
