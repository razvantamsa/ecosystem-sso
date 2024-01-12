import { PrismaClient } from '@prisma/client';

function checkSqlConnection() {
  if (!global.sqlconnected || !(global.sqlclient instanceof PrismaClient)) {
    throw new Error('Cannot connect to the database');
  }
}

async function getAllUsersDB() {
  checkSqlConnection();
  try {
    return global.sqlclient.user.findMany();
  } catch (error) {
    throw new Error(error as any as string);
  }
}

async function getOneUserDB(userId: string) {
  checkSqlConnection();

  try {
    return global.sqlclient.user.findUnique({
      where: {
        id: userId
      }
    });
  } catch (error) {
    throw new Error(error as any as string);
  }
}

async function createOneUserDB(name: string, email: string) {
  checkSqlConnection();

  try {
    return global.sqlclient.user.create({
      data: {
        name,
        email
      }
    });
  } catch (error) {
    throw new Error(error as any as string);
  }
}

async function deleteOneUserDB(userId: string) {
  checkSqlConnection();

  try {
    return global.sqlclient.user.delete({
      where: {
        id: userId
      }
    });
  } catch (error) {
    throw new Error(error as any as string);
  }
}

async function updateOneUserDB(userId: string, name: string) {
  checkSqlConnection();

  try {
    return global.sqlclient.user.update({
      where: { id: userId },
      data: {
        name
      }
    });
  } catch (error) {
    throw new Error(error as any as string);
  }
}

const UserRepository = {
  getAllUsersDB,
  getOneUserDB,
  createOneUserDB,
  deleteOneUserDB,
  updateOneUserDB
};

export default UserRepository;
