const db = require('../../database');
const querylib = require('./queries');

exports.getStatisticsWeekly = (req, res, next) => {
    let msg = {
        data: {
            title: '',
            dataFormat: '',
            data: {
                x: [],
                y: [],
            },
        },
    };
    res.json(msg).end();
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
