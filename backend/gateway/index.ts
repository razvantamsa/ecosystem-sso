import fastify from 'fastify';
import endpointsPlugin from './endpoints';
import '../db/setup';

const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT) || 4000;

const server = fastify();

server.get('/ping', async () => {
  return { message: 'pong' };
});

server.register(endpointsPlugin);

server.listen({ host: HOST, port: PORT }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at http://${HOST}:${PORT}`);
});
