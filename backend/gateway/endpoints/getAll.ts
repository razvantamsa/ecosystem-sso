import UserRepository from '../../db/user.repository';
import { RouteOptions } from 'fastify';

async function getAll() {
  try {
    const users = await UserRepository.getUsers();
    return { users };
  } catch (error) {
    throw new Error(error as any as string);
  }
}

const routeOptions: RouteOptions = {
  method: 'GET',
  url: '/users',
  handler: getAll
};

export default routeOptions;
