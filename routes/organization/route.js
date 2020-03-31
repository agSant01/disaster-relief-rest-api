var express = require('express');
var handler = require('./handlers');
var router = express.Router();

// Get an organization
router.get('/', handler.getOrganizations);

// Register an organization
router.post('/', handler.postRegister);

router.get('/:orgID', handler.getOrganization);

// Get organization representatives
router.get('/:orgID/representatives', handler.getRepresentatives);

// Add organization representative
router.post('/:orgID/add_representative', handler.postAddRepresentative);

module.exports = router;
