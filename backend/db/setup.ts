import { PrismaClient } from '@prisma/client';
import Logger from '../common/logger';
import Redis from 'ioredis';

const redisConfig = {
  host: process.env.DB_HOST_REDIS,
  port: Number(process.env.DB_PORT_REDIS),
  password: process.env.DB_PASSWORD_REDIS
};

function checkCacheConnection() {
  const maxRetries = 5;
  let retryAttempts = 0;

  try {
    const redis = new Redis(redisConfig);
    global.cacheclient = redis;

    redis.on('connect', () => {
      Logger.info('Connected to the cache.');
      retryAttempts = 0;
      global.cacheconnected = true;
    });

    redis.on('error', async (err) => {
      retryAttempts += 1;
      global.cacheconnected = false;

      Logger.error(`Redis connection error: ${err.message}`);

      if (retryAttempts < maxRetries) {
        Logger.info(`Retrying to connect to cache attempt: ${retryAttempts}`);
      } else if (retryAttempts === maxRetries) {
        Logger.error(`Max retries reached: ${maxRetries}`);
      }
    });
  } catch (error) {
    Logger.error(`Error connecting to the cache: ${error}`);
  }
}

async function checkDatabaseConnection() {
  const sqlclient = new PrismaClient();

  try {
    await sqlclient.$connect();
    global.sqlclient = sqlclient;
    Logger.info('Connected to the database.');
  } catch (error) {
    Logger.error(`Error connecting to the database: ${error}`);
  }
}

(async () => {
  try {
    await checkDatabaseConnection();
    global.sqlconnected = true;

    checkCacheConnection();
  } catch (error) {
    Logger.error(error as any as string);
    global.sqlconnected = false;
  }
})();
