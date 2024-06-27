const { categoriesRoutes } = require('./categories');
const { healthRoutes } = require('./health');

module.exports = fastify => {
  categoriesRoutes(fastify);
  healthRoutes(fastify);
}