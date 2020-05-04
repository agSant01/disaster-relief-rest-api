const { Pool } = require('pg');

/**
 * Create Database connection.
 */
const databaseConnection = new Pool({
    connectionString: (process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/db'),
    ssl: false,
});
console.log(databaseConnection, process.env.DATABASE_URL);

module.exports = databaseConnection;
