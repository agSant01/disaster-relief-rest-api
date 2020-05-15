const db = require('../../database');
const querylib = require('./queries');

exports.getStatisticsWeekly = (req, res, next) => {
    db.query(querylib.qGetWeeklyStatistics)
        .then((result) => {
            const msg = {
                weekly_statistics: result.rows,
            };
            res.json(msg).end();
        })
        .catch((err) => {
            console.log(err.stack);

            res.status(503)
                .json({ error: qerr.stack })
                .end();
        });
};

exports.getStatisticsDaily = (req, res, next) => {
    db.query(querylib.qGetDailyStatistics)
        .then((result) => {
            const msg = {
                daily_statistics: result.rows,
            };
            res.json(msg).end();
        })
        .catch((err) => {
            console.log(err.stack);

            res.status(503)
                .json({ error: qerr.stack })
                .end();
        });
};
