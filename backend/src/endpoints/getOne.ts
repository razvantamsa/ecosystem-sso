import { FastifyRequest, RouteOptions } from 'fastify';

async function getOne(request: FastifyRequest) {
  const { id } = request.params as { id: string };
  return { message: `getting user ${id}` };
}

const routeOptions: RouteOptions = {
  method: 'GET',
  url: '/users/:id',
  handler: getOne
};

export default routeOptions;
