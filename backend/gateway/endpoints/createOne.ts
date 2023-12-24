import { RouteOptions } from 'fastify';

async function createOne() {
  return { message: 'creating user' };
}

const routeOptions: RouteOptions = {
  method: 'POST',
  url: '/users',
  handler: createOne
};

export default routeOptions;
