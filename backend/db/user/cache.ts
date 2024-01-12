import { Redis } from 'ioredis';

function checkCacheConnection() {
  if (!global.cacheconnected || !(global.cacheclient instanceof Redis)) {
    throw new Error('Cannot connect to the cache');
  }
}

async function setUser(userId: string, userData: any) {
  checkCacheConnection();

  try {
    await global.cacheclient.set(userId, JSON.stringify(userData));
  } catch (error) {
    throw new Error(error as any as string);
  }
}

async function getUser(userId: string) {
  checkCacheConnection();

  try {
    return global.cacheclient.get(userId);
  } catch (error) {
    throw new Error(error as any as string);
  }
}

async function deleteUser(userId: string) {
  checkCacheConnection();
  try {
    await global.cacheclient.del(`user:${userId}`);
  } catch (error) {
    throw new Error(error as any as string);
  }
}

const UserServiceCache = {
  setUser,
  getUser,
  deleteUser
};

export default UserServiceCache;
