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
// supports keyword
router.get(
    '/available/provider/:provider',
    handler.getResourcesAvailableByProvider
);

// Get available resources either free or to purchase
// supports kewyword search
router.get('/available/:resourceid?', handler.getAvailableResources);

// Get all open resource requests
// supports kewyword search
router.get('/requests/:id?', handler.getRequests);

// Get reserved resource
router.get('/reserves/:reserveid?', handler.getReservedResources);

// Get all resources
// supports `debug`
router.get('/:ID?', handler.getResources);

// Get the attribute by type
router.get('/:typeName/attributes', handler.getResourceAttributesByTypeName);

// Submit resource
router.post('/', handler.postSubmitResource);

// Submit resource request
router.post('/requests', handler.postResourceRequest);

// Reserve resource
router.post('/reserves', handler.postReserveResource);

// Buy resource
router.post('/purchases', handler.postBuyResource);

module.exports = router;
