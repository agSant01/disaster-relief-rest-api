const { Pool } = require('pg');

let config;

try {
    config = require('./config');
} catch (error) {
    // Do nothing. Config does not exists
}

/**
 * Create Database connection.
 */
const databaseConnection = new Pool({
    connectionString: process.env.DATABASE_URL || config.DATABASE_URL,
    ssl: false,
});
console.log(databaseConnection, process.env.DATABASE_URL);

module.exports = databaseConnection;
