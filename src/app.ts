import fastify from 'fastify';
import config from 'config';

const port: number = config.get('port');

const app = fastify();

app.get('/', async (_, res) => {
  return res.send(200);
});

app
  .listen({ port })
  .then(() => {
    app.log.info(`Listening on port: ${port}`);
  })
  .catch((e) => {
    app.log.error(e, `Server exited with error`);
  });
