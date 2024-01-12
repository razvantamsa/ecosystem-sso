import UserRepository from '../../db/user';
import { FastifyRequest, RouteOptions } from 'fastify';

async function createOne(request: FastifyRequest) {
  try {
    const { name, email } = request.body as any;
    const user = await UserRepository.createOneUser(name, email);
    return { user };
  } catch (error) {
    throw new Error(error as any as string);
  }
}

const routeOptions: RouteOptions = {
  method: 'POST',
  url: '/users',
  handler: createOne
};

export default routeOptions;
