import UserRepository from '../../db/user.repository';
import { FastifyRequest, RouteOptions } from 'fastify';

async function updateOne(request: FastifyRequest) {
  try {
    const { id } = request.params as any;
    const { name } = request.body as any;
    const user = await UserRepository.updateOneUser(id, name);
    return { user };
  } catch (error) {
    throw new Error(error as any as string);
  }
}

const routeOptions: RouteOptions = {
  method: 'PATCH',
  url: '/users/:id',
  handler: updateOne
};

export default routeOptions;
