import { PrismaClient } from '@prisma/client';
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
      console.log('Connected to the cache.');
      retryAttempts = 0;
      global.cacheconnected = true;
    });

    redis.on('error', async (err) => {
      retryAttempts += 1;
      global.cacheconnected = false;

      console.error('Redis connection error:', err.message);

      if (retryAttempts < maxRetries) {
        console.log(`Retrying to connect to cache attempt: ${retryAttempts}`);
      } else if (retryAttempts === maxRetries) {
        console.error(`Max retries reached: ${maxRetries}`);
      }
    });
  } catch (error) {
    console.error('Error connecting to the cache:', error);
  }
}

async function checkDatabaseConnection() {
  const sqlclient = new PrismaClient();

  try {
    await sqlclient.$connect();
    global.sqlclient = sqlclient;
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

(async () => {
  try {
    await checkDatabaseConnection();
    global.sqlconnected = true;

    checkCacheConnection();
  } catch (error) {
    console.error(error);
    global.sqlconnected = false;
  }
})();
