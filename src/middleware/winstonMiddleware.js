const winston = require('winston');

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  defaultMeta: {},
  transports: [new winston.transports.File({ filename: 'test.log', level: 'info' }), new winston.transports.Console()],
});

// logger.log({
//   level: 'info',
//   message: 'test message',
// });

module.exports = logger;
