import expressLoader from './express';
import logger from './logger';

export default async ({ expressApp }) => {
  expressLoader({ app: expressApp });

  logger.info('Loading express app');
};
