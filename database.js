const { Client } = require('pg');

/**
 * Create Database connection.
 */
const databaseConnection = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: false,
});

databaseConnection.connect();

module.exports = databaseConnection;
