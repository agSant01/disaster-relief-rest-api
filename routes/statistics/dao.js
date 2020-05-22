const db = require('../../database');
const querylib = require('./queries');

exports.getStatisticsWeekly = async () => {
    const result = await db.query(querylib.qGetWeeklyStatistics);

    const msg = {
        weekly_statistics: result.rows,
    };

    return msg;
};

exports.getStatisticsDaily = async () => {
    const result = await db.query(querylib.qGetDailyStatistics);

    const msg = {
        daily_statistics: result.rows,
    };

    return msg;
};

exports.getStatisticsBySenateWeekly = async () => {
    const result = await db.query(querylib.qGetSenateRegionWeekly);

    const msg = {
        count: result.rows.length,
        weekly_statistics_by_senate: result.rows,
    };

    return msg;
};

exports.getStatisticsBySenateDaily = async () => {
    const result = await db.query(querylib.qGetSenateRegionDaily);

    const msg = {
        count: result.rows.length,
        daily_statistics_by_senate: result.rows,
    };

    return msg;
};
