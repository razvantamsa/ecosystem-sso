import UserServiceDB from './user.service';
import UserCache from './user.cache';
import CacheService from '../cache.service';

async function getAllUsers() {
  return UserServiceDB.getAllUsersDB();
}

async function getOneUser(userId: string) {
  const cacheKey = UserCache.userCacheKey(userId);

  const userData: any = await CacheService.get(cacheKey);
  if (userData) {
    return { id: userId, ...JSON.parse(userData) };
  }

  return UserServiceDB.getOneUserDB(userId);
}

async function createOneUser(name: string, email: string) {
  const result = await UserServiceDB.createOneUserDB(name, email);

  if (result) {
    const cacheKey = UserCache.userCacheKey(result.id);

    await CacheService.set(cacheKey, {
      name,
      email
    });
  }

  return result;
}

async function deleteOneUser(userId: string) {
  const result = await UserServiceDB.deleteOneUserDB(userId);

  if (result) {
    const cacheKey = UserCache.userCacheKey(result.id);
    await CacheService.del(cacheKey);
  }

  return result;
}

async function updateOneUser(userId: string, name: string) {
  const result = await UserServiceDB.updateOneUserDB(userId, name);

  if (result) {
    const cacheKey = UserCache.userCacheKey(userId);
    await CacheService.set(cacheKey, {
      name: result.name,
      email: result.email
    });
  }

  return result;
}

const UserRepository = {
  getAllUsers,
  getOneUser,
  createOneUser,
  deleteOneUser,
  updateOneUser
};

export default UserRepository;
