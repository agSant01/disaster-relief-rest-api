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
router.use('/suppliers', providersRoute);
router.use('/resources', resourcesRoute);
router.use('/statistics', statisticsRoute);
router.use('/login', loginRoute);

router.get('/', (req, res, next) => {
    res.json({ msg: 'Disaster relief API.' }).end();
});

router.get('/dbtest', (req, res, next) => {
    db.query('SELECT NOW() as current_time', (err, result) => {
        console.log(err, result);

        if (err) {
            res.status(504)
                .json({ error: err.toString() })
                .end();
            return;
        }

        const msg = {
            db_connection_test: result.rows[0],
        };

        res.json(msg).end();
    });
});

module.exports = router;
