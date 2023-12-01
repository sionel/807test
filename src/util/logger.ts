import winston from "winston";

const { createLogger, format, transports } = winston;
const { combine, timestamp, printf } = format;

const logFormat = printf(({ level, message, timestamp }: any) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp(), logFormat),
  transports: [new transports.File({ filename: "logs/combined.log" })],
});

export default logger;
