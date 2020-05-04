var express = require('express');
var handler = require('./handlers');
var router = express.Router();

//get providers list
router.get('/', handler.getProviders);

// Get all organizations
router.get('/organizations', handler.getOrganizations);

// Register an organization
router.post('/organizations', handler.postRegister);

//get providers list by id
router.get('/:id', handler.getProviderById);

router.get('/organizations/:orgID', handler.getOrganization);

// Get organization representatives
router.get('/organizations/:orgID/representatives', handler.getRepresentatives);

// Add organization representative
router.post(
    '/organizations/:orgID/add_representative',
    handler.postAddRepresentative
);

module.exports = router;
