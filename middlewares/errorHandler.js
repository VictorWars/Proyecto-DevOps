const { logger } = require('../util/logger');

/**
 * Represents a middleware
 * @author Emmanuel Chable
 * @param {*} req - HTTP Request
 * @param {*} res - HTTP Response
 * @param {*} next - callback
 * @returns res - HTTP Response
 */
const errorHandler = (err, req, res, next) => {
  logger.error(`server error: ${JSON.stringify(err)}`);
  res.status(500).json({ error: err });
  next();
};

module.exports = { errorHandler };
