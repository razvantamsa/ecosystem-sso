import { PrismaClient } from '@prisma/client';

async function getAllUsers() {
  if (!global.sqlconnected || !(global.sqlclient instanceof PrismaClient)) {
    throw new Error('Cannot connect to the database');
  }

  try {
    return global.sqlclient.user.findMany();
  } catch (error) {
    throw new Error(error as any as string);
  }
}

async function getOneUser(userId: string) {
  if (!global.sqlconnected || !(global.sqlclient instanceof PrismaClient)) {
    throw new Error('Cannot connect to the database');
  }

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

async function createOneUser(name: string, email: string) {
  if (!global.sqlconnected || !(global.sqlclient instanceof PrismaClient)) {
    throw new Error('Cannot connect to the database');
  }

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

async function deleteOneUser(userId: string) {
  if (!global.sqlconnected || !(global.sqlclient instanceof PrismaClient)) {
    throw new Error('Cannot connect to the database');
  }

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

async function updateOneUser(userId: string, name: string) {
  if (!global.sqlconnected || !(global.sqlclient instanceof PrismaClient)) {
    throw new Error('Cannot connect to the database');
  }

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
  getAllUsers,
  getOneUser,
  createOneUser,
  deleteOneUser,
  updateOneUser
};

export default UserRepository;
