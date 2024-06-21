exports.productsRoutes = (fastify) => {
  fastify.get('/products', (request, reply) => {
    fastify.mysql.query('SELECT id, name, price FROM products', function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.post('/products', (request, reply) => {
    const { name, price } = request.body;
    fastify.mysql.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.get('/products/:id', (request, reply) => {
    const { id } = request.params;
    fastify.mysql.query('SELECT id, name, price FROM products WHERE id = ?', [id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.put('/products/:id', (request, reply) => {
    const { id } = request.params;
    const { name, price } = request.body;
    fastify.mysql.query('UPDATE products SET name = ?, price = ? WHERE id = ?', [name, price, id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.delete('/products/:id', (request, reply) => {
    const { id } = request.params;
    fastify.mysql.query('DELETE FROM products WHERE id = ?', [id], function onResult(err, result) {
      reply.send(err || result);
    });
  });
}