var express = require('express');
var handler = require('./handlers');
var router = express.Router();

// Get the types of resources that the system supports
router.get('/types', handler.getTypes);

// Get the attribute of a certain resource type
router.get('/types/:id', handler.getResourceTypeAttributes);

// Get all purchases
router.get('/purchases/:ID?', handler.getPurchase);

// Get available resources by provider
router.get(
    '/available/provider/:provider',
    handler.getResourcesAvailableByProvider
);

router.get('/available/:resourceid?', handler.getResourcesAvailableByResId);

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
router.post('/', handler.postSubmitResource);

// Submit resource request
router.post('/requests', handler.postResourceRequest);

// Reserve resource
router.post('/reserves', handler.postReserveResource);

// Buy resource
router.post('/purchases', handler.postBuyResource);

module.exports = router;
