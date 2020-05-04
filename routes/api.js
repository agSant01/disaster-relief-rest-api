var express = require('express');
var userRoute = require('./user/route');
var registerRoute = require('./register/route');
var providersRoute = require('./providers/route');
var resourcesRoute = require('./resources/route');
var statisticsRoute = require('./statistics/route');
var loginRoute = require('./login/route');
const db = require('../database');

var router = express.Router();

router.use('/users', userRoute);
router.use('/register', registerRoute);
router.use('/providers', providersRoute);
router.use('/resources', resourcesRoute);
router.use('/statistics', statisticsRoute);
router.use('/login', loginRoute);

router.get('/', (req, res, next) => {
    res.json({ msg: 'Disaster relief API.' }).end();
});

router.get('/dbtest1', (req, res, next) => {
    db.query('SELECT NOW()', (err, result) => {
        console.log(err, result);
        res.json(result ? result : err).end();
    });
});

router.get('/dbtest2', (req, res, next) => {
    db.query('SELECT * FROM mytest1;', (err, result) => {
        console.log(err);
        console.log(result);

        res.json(result ? result : err).end();
    });
});

router.get('/dbtest3', (req, res, next) => {
    db.query('SELECT * FROM mytest1;', (err, result) => {
        console.log(err);
        console.log(result);
        console.log(process.env.DATABASE_URL);

        res.json({ results: result, err: err }).end();
    });
});

module.exports = router;
