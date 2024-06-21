const { productsRoutes } = require('./products');
const { categoriesRoutes } = require('./categories');

module.exports = fastify => {
  productsRoutes(fastify);
  categoriesRoutes(fastify);
}