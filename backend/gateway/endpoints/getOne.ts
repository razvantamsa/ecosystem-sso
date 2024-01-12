import UserRepository from '../../db/user';
import { FastifyRequest, RouteOptions } from 'fastify';

async function getOne(request: FastifyRequest) {
  try {
    const { id } = request.params as { id: string };
    const user = await UserRepository.getOneUser(id);
    return { user };
  } catch (error) {
    throw new Error(error as any as string);
  }
}

const routeOptions: RouteOptions = {
  method: 'GET',
  url: '/users/:id',
  handler: getOne
};

export default routeOptions;
