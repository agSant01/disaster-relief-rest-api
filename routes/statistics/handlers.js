const db = require('../../database');
const querylib = require('./queries');
const statisticDao = require('./dao');

exports.getStatisticsWeekly = (req, res, next) => {
    statisticDao
        .getStatisticsWeekly()
        .then((result) => {
            console.log('result', result);

            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log(error);

            res.status(503)
                .json({ error: error.stack })
                .end();
        });
};

exports.getStatisticsDaily = (req, res, next) => {
    statisticDao
        .getStatisticsDaily()
        .then((result) => {
            console.log('result', result);

            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log(error);

            res.status(503)
                .json({ error: error.stack })
                .end();
        });
};

exports.getStatisticsBySenateWeekly = (req, res, next) => {
    statisticDao
        .getStatisticsBySenateWeekly()
        .then((result) => {
            console.log('result', result);

            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log(error);

            res.status(503)
                .json({ error: error.stack })
                .end();
        });
};

exports.getStatisticsBySenateDaily = (req, res, next) => {
    statisticDao
        .getStatisticsBySenateDaily()
        .then((result) => {
            console.log('result', result);

            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log(error);

            res.status(503)
                .json({ error: error.stack })
                .end();
        });
};
