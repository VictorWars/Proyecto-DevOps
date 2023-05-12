/**
 * Default config not change
 */
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser');
const app = express();
const DEFAULT_ROUTE = process.env.DEFAULT_ROUTE || 'api/v1';
const { logApiCalls } = require('./middlewares/logApiCalls');
const { errorHandler } = require('./middlewares/errorHandler');

require('./database');

app.use(cors());
app.use(bodyParser.json());
app.use(logApiCalls);
app.use(`/${DEFAULT_ROUTE}`, routes);
app.use(errorHandler);

module.exports = app;
