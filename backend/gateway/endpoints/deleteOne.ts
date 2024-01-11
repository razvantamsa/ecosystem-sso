import UserRepository from '../../db/user.repository';
import { FastifyRequest, RouteOptions } from 'fastify';

async function deleteOne(request: FastifyRequest) {
  try {
    const { id } = request.params as { id: string };
    const user = await UserRepository.deleteOneUser(id);
    return { user };
  } catch (error) {
    throw new Error(error as any as string);
  }
}

const routeOptions: RouteOptions = {
  method: 'DELETE',
  url: '/users/:id',
  handler: deleteOne
};

export default routeOptions;
