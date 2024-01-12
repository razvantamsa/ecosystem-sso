import { Redis } from 'ioredis';

function checkCacheConnection() {
  if (!global.cacheconnected || !(global.cacheclient instanceof Redis)) {
    throw new Error('Cannot connect to the cache');
  }
}

async function set(cacheKey: string, data: any) {
  checkCacheConnection();
  try {
    await global.cacheclient.set(cacheKey, JSON.stringify(data));
  } catch (error) {
    throw new Error(error as any as string);
  }
}

async function get(cacheKey: string) {
  checkCacheConnection();
  try {
    return global.cacheclient.get(cacheKey);
  } catch (error) {
    throw new Error(error as any as string);
  }
}

async function del(cacheKey: string) {
  checkCacheConnection();
  try {
    await global.cacheclient.del(cacheKey);
  } catch (error) {
    throw new Error(error as any as string);
  }
}

const CacheService = {
  set,
  get,
  del
};

export default CacheService;
