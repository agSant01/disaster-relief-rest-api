const { Pool } = require('pg');
const config = require('./config');

/**
 * Create Database connection.
 */
const databaseConnection = new Pool({
    connectionString: process.env.DATABASE_URL || config.DATABASE_URL,
    ssl: false,
});

module.exports = databaseConnection;
