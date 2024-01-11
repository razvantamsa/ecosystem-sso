import { PrismaClient } from '@prisma/client';

async function getUsers() {
  if (!global.sqlconnected || !(global.sqlclient instanceof PrismaClient)) {
    throw new Error('Cannot connect to the database');
  }

  try {
    return global.sqlclient.user.findMany();
  } catch (error) {
    throw new Error(error as any as string);
  }
}

const UserRepository = {
  getUsers
};

export default UserRepository;
