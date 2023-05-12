const { logger } = require('../util/logger');

const logApiCalls = (req, res, next) => {
  // Log an info message for each incoming request
  logger.info(
    `${req.method} request for ${req.url} with queries: ${JSON.stringify(
      req.query
    )} and headers: ${JSON.stringify(req.headers)}`
  );
  let body = { ...req.body };
  ['password', 'phone'].forEach((key) => {
    if (body[key]) {
      body[key] = body[key]
        ? body[key]
            .split('')
            .map((char) => '*')
            .join('')
        : '';
    }
  });

  logger.debug(`request body: ${JSON.stringify(body)}`);

  next();
};

module.exports = { logApiCalls };
