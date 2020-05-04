const { Pool } = require('pg');

/**
 * Create Database connection.
 */
const databaseConnection = new Pool({
    connectionString: (process.env.DATABASE_URL || 'postgresql://postgres:Gibsones339!@localhost:5432/disaster'),
    ssl: false,
});
console.log(databaseConnection, process.env.DATABASE_URL);

module.exports = databaseConnection;
