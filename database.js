const { Pool } = require('pg');

/**
 * Create Database connection.
 */
const databaseConnection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false,
});

module.exports = databaseConnection;
