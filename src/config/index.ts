import dotenv from 'dotenv';

const envFound = dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'DEV';

if (envFound.error) {
  throw new Error('.env file missing');
}

const config = {
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
  port: process.env.PORT,
};

export default config;
