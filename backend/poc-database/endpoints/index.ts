import { FastifyInstance } from 'fastify';

// endpoints
import getAllOptions from './getAll';
import getOneOptions from './getOne';

async function endpointsPlugin(fastify: FastifyInstance, options: any) {
  fastify.route(getAllOptions);
  fastify.route(getOneOptions);
}

export default endpointsPlugin;
