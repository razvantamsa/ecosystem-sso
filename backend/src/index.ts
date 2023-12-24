import fastify from 'fastify';
import endpointsPlugin from './endpoints';

const PORT = Number(process.env.PORT) || 4000;

const server = fastify();

server.get('/ping', async () => {
  return { message: 'pong' };
});

server.register(endpointsPlugin);

server.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
