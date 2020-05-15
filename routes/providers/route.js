var express = require('express');
var handler = require('./handlers');
var router = express.Router();

// Get all organizations
// supports debug
router.get('/organizations', handler.getOrganizations);

// Get Org By Id
// supports debug
router.get('/organizations/:orgID', handler.getOrganization);

// Get organization representatives
// supports debug
router.get('/organizations/:orgID/representatives', handler.getRepresentatives);

//get providers list
// supports debug
router.get('/', handler.getProviders);

//get providers list by id
// supports debug
router.get('/:id', handler.getProviderById);

// Add organization representative
router.post(
    '/organizations/:orgID/representative',
    handler.postAddRepresentative
);

// Register an organization
router.post('/organizations', handler.postRegisterOrganization);

module.exports = router;
