import { RouteOptions } from 'fastify';

async function getAll() {
  return { message: 'getting users' };
}

const routeOptions: RouteOptions = {
  method: 'GET',
  url: '/users',
  handler: getAll
};

export default routeOptions;

// async function endpointsPlugin(fastify: FastifyInstance, options: any) {
//   const routeOptions: RouteOptions = {
//     method: 'GET',
//     url: '/users',
//     handler: getAll
//   };

//   fastify.route(routeOptions);
// }

// export default endpointsPlugin;
