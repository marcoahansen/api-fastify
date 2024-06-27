exports.healthRoutes = (fastify) => {
  fastify.get('/', (request, reply) => {
    reply.send({ status: 'Bem vindo ao e-commerce' });
  });
}