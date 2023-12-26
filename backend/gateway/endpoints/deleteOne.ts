import { FastifyRequest, RouteOptions } from 'fastify';

async function deleteOne(request: FastifyRequest) {
  const { id } = request.params as { id: String };
  return { message: `deleting user ${id}` };
}

const routeOptions: RouteOptions = {
  method: 'DELETE',
  url: '/users/:id',
  handler: deleteOne
};

export default routeOptions;
