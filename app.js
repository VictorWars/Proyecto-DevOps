/**
 * Default config not change
 */
const express = require("express");
const cors = require('cors')
const routes = require("./routes");
const bodyParser = require('body-parser');
const app = express();
const DEFAULT_ROUTE = process.env.DEFAULT_ROUTE || 'api/v1';

require('./database');

app.use(cors())
app.use(bodyParser.json());
app.use(`/${DEFAULT_ROUTE}`, routes);

module.exports = app