const db = require('../../database');
const querylib = require('./queries');

exports.getStatisticsWeekly = (req, res, next) => {
    db.query(querylib.qGetWeeklyStatistics, (qerr, result) => {
        if (qerr) {
            console.log(qerr.stack);
            res.status(503)
                .json({ error: qerr.stack })
                .end();
            return;
        }

        const msg = {
            weekly_statistics: result.rows,
        };

        res.json(msg).end();
    });
};

exports.getStatisticsDaily = (req, res, next) => {
    db.query(querylib.qGetDailyStatistics, (qerr, result) => {
        if (qerr) {
            console.log(qerr.stack);
            res.status(503)
                .json({ error: qerr.stack })
                .end();
            return;
        }

        const msg = {
            daily_statistics_by_senate: result.rows,
        };

        res.json(msg).end();
    });
};

exports.getStatisticsBySenateWeekly = (req, res, next) => {
    db.query(querylib.qGetSenateRegionWeekly, (qerr, result) => {
        if (qerr) {
            console.log(qerr.stack);
            res.status(503)
                .json({ error: qerr.stack })
                .end();
            return;
        }

        const msg = {
            count: result.rows.length,
            weekly_statistics_by_senate: result.rows,
        };
        res.json(msg).end();
    });
};

exports.getStatisticsBySenateDaily = (req, res, next) => {
    db.query(querylib.qGetSenateRegionDaily, (qerr, result) => {
        if (qerr) {
            console.log(qerr.stack);
            res.status(503)
                .json({ error: qerr.stack })
                .end();
            return;
        }

        const msg = {
            count: result.rows.length,
            weekly_statistics_by_senate: result.rows,
        };
        res.json(msg).end();
    });
};
