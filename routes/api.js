var express = require('express');
var userRoute = require('./user/route');
var registerRoute = require('./register/route');
var providersRoute = require('./providers/route');
var resourcesRoute = require('./resources/route');
var statisticsRoute = require('./statistics/route');
var loginRoute = require('./login/route');
var organizationRoute = require('./organization/route');
var router = express.Router();

router.use('/user', userRoute);
router.use('/register', registerRoute);
router.use('/providers', providersRoute);
router.use('/resources', resourcesRoute);
router.use('/statistics', statisticsRoute);
router.use('/login', loginRoute);
router.use('/organization', organizationRoute);

router.get('/', (req, res, next) => {
    res.json({ msg: 'Disaster relief API.' }).end();
});

module.exports = router;
