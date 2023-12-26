import { FastifyInstance } from 'fastify';

// endpoints
import getAllOptions from './getAll';
import getOneOptions from './getOne';
import createOneOptions from './createOne';
import updateOneOptions from './updateOne';
import deleteOneOptions from './deleteOne';

async function endpointsPlugin(fastify: FastifyInstance, options: any) {
  fastify.route(getAllOptions);
  fastify.route(getOneOptions);
  fastify.route(createOneOptions);
  fastify.route(updateOneOptions);
  fastify.route(deleteOneOptions);
}

export default endpointsPlugin;
