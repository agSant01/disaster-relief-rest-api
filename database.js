const { Client } = require('pg');

/**
 * Create Database connection.
 */
const databaseConnection = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

module.exports = databaseConnection;
