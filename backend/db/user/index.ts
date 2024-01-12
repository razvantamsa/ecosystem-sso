import UserServiceDB from './sql';
import UserServiceCache from './cache';

async function getAllUsers() {
  return UserServiceDB.getAllUsersDB();
}

async function getOneUser(userId: string) {
  return UserServiceDB.getOneUserDB(userId);
}

async function createOneUser(name: string, email: string) {
  return UserServiceDB.createOneUserDB(name, email);
}

async function deleteOneUser(userId: string) {
  return UserServiceDB.deleteOneUserDB(userId);
}

async function updateOneUser(userId: string, name: string) {
  return updateOneUser(userId, name);
}

const UserRepository = {
  getAllUsers,
  getOneUser,
  createOneUser,
  deleteOneUser,
  updateOneUser
};

export default UserRepository;
