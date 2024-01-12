function userCacheKey(userId: string) {
  return `user:${userId}`;
}

const UserCache = {
  userCacheKey
};

export default UserCache;
