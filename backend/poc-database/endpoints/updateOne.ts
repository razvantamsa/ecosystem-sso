import { FastifyRequest, RouteOptions } from 'fastify';

async function updateOne(request: FastifyRequest) {
  const { id } = request.params as { id: string };
  return { message: `update user ${id}` };
}

const routeOptions: RouteOptions = {
  method: 'PATCH',
  url: '/users/:id',
  handler: updateOne
};

export default routeOptions;
