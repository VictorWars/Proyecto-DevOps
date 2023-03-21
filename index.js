/**
 * Default config not change
 */
const express = require("express");

const routes = require("./routes");
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const DEFAULT_ROUTE = process.env.DEFAULT_ROUTE || 'api/v1';

app.use(bodyParser.json());
app.use(`/${DEFAULT_ROUTE}`, routes);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});