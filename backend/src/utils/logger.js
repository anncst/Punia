import winston from 'winston'
import morgan from 'morgan'

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.errors({
      stack: true,
    }),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.printf(
      ({ timestamp, level, message }) =>
        `${timestamp} [${level.toUpperCase()}] ${message}`
    )
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.colorize({ all: true }),
    }),
    new winston.transports.File({
      filename: 'logs/errors.txt',
      level: 'error',
    }),
    new winston.transports.File({ filename: 'logs/logs.txt' }),
  ],
})

export const morganLogger = morgan('short', {
  stream: {
    write: (message) => {
      logger.info(message.substring(0, message.lastIndexOf('\n')))
    },
  },
})

export default logger
