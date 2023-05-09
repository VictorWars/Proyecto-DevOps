const { logger } = require('../util/logger');

require('dotenv').config();

const logQueries = (query) => {
  logger.debug(`DATABASE [${query}]`);
};

module.exports = {
  development: {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: `${process.env.DB_NAME}_development`,
    logging: logQueries,
  },
  test: {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: `${process.env.DB_NAME}_test`,
    logging: logQueries,
  },
  production: {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    logging: logQueries,
  },
};
