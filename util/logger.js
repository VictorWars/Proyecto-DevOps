const winston = require('winston');

const logger = winston.createLogger({
  // Log only if level is less than (meaning more severe) or equal to this
  levels: winston.config.syslog.levels,
  // Use timestamp and printf to create a standard log format
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level.toUpperCase()}: ${info.message}`
    )
  ),
  // Log to the console and a file
  transports: [
    new winston.transports.Console({ level: 'debug' }),

    new winston.transports.File({ level: 'debug', filename: 'logs/app.log' }),
  ],
});

module.exports = { logger };
