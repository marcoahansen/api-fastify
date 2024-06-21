const Fastify = require('fastify');
require('dotenv').config();

const fastify = Fastify({
  logger: false
});

fastify.register(require('@fastify/mysql'), {
  connectionString: process.env.DATABASE_URL
});

require('./routes')(fastify);

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});

