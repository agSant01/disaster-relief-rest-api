let config;

try {
    config = require('./config');
} catch (error) {
    // Do nothing. Config does not exists
}

// modules
var bodyParser = require('body-parser');
const debug = require('debug')('e-template:server');
const http = require('http');
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { configure } = require('indicative/validator');
const { JsonApiFormatter } = require('indicative-formatters');
const app = express();

// Application dependencies
const db = require('./database');
const api = require('./routes/api');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api', api);

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

configureJsonValidator();

/**
 * Listen on provided port, on all network interfaces.
 */
// start server
server.listen(port, function() {
    console.log(`Database: ${process.env.DATABASE_URL || config.DATABASE_URL}`);
    console.log(`Listening at PORT: ${port}`);
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind =
        typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
    console.log('Listening on ' + bind);
}

/**
 * Set up JSON Validator
 */
function configureJsonValidator() {
    configure({
        formatter: JsonApiFormatter,
    });
}
