import pino, { Logger } from 'pino';

let logger: Logger;

const environment = process.env.NODE_ENV;

// Use pino-pretty only when in development due to performance issue
if (environment === 'DEV') {
  const transport = pino.transport({
    target: 'pino-pretty',
    options: { colorize: true },
  });
  logger = pino(transport);
} else {
  logger = pino();
}

export default logger;
