exports.categoriesRoutes = (fastify) => {
  fastify.get('/categories', (request, reply) => {
    fastify.mysql.query('SELECT id, name FROM categories', function onResult(err, result) {
      reply.send(err || result);
    })
  });

  fastify.post('/categories', (request, reply) => {
    const { name } = request.body;
    fastify.mysql.query('INSERT INTO categories (name) VALUES (?)', [name], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.get('/categories/:id', (request, reply) => {
    const { id } = request.params;
    fastify.mysql.query('SELECT id, name FROM categories WHERE id = ?', [id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.put('/categories/:id', (request, reply) => {
    const { id } = request.params;
    const { name } = request.body;
    fastify.mysql.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.delete('/categories/:id', (request, reply) => {
    const { id } = request.params;
    fastify.mysql.query('DELETE FROM categories WHERE id = ?', [id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.get('/categories/:id/products', (request, reply) => {
    const { id } = request.params;
    fastify.mysql.query('SELECT p.id, p.name, p.price FROM products p JOIN categories c ON p.category_id = c.id WHERE c.id = ?', [id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.post('/categories/:id/products', (request, reply) => {
    const { id } = request.params;
    const { name, price } = request.body;
    fastify.mysql.query('INSERT INTO products (name, price, category_id) VALUES (?, ?, ?)', [name, price, id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.get('/categories/:id/products/:product_id', (request, reply) => {
    const { id, product_id } = request.params;
    fastify.mysql.query('SELECT id, name, price FROM products WHERE category_id = ? AND id = ?', [id, product_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.put('/categories/:id/products/:product_id', (request, reply) => {
    const { id, product_id } = request.params;
    const { name, price } = request.body;
    fastify.mysql.query('UPDATE products SET name = ?, price = ? WHERE category_id = ? AND id = ?', [name, price, id, product_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.delete('/categories/:id/products/:product_id', (request, reply) => {
    const { id, product_id } = request.params;
    fastify.mysql.query('DELETE FROM products WHERE category_id = ? AND id = ?', [id, product_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.get('/categories/:id/products/:product_id/reviews', (request, reply) => {
    const { id, product_id } = request.params;
    fastify.mysql.query('SELECT r.id, r.comment FROM reviews r JOIN products p ON r.product_id = p.id JOIN categories c ON p.category_id = c.id WHERE c.id = ? AND p.id = ?', [id, product_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.post('/categories/:id/products/:product_id/reviews', (request, reply) => {
    const { id, product_id } = request.params;
    const { comment } = request.body;
    fastify.mysql.query('INSERT INTO reviews (comment, product_id) VALUES (?, ?)', [comment, product_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.get('/categories/:id/products/:product_id/reviews/:review_id', (request, reply) => {
    const { id, product_id, review_id } = request.params;
    fastify.mysql.query('SELECT id, comment FROM reviews WHERE product_id = ? AND id = ?', [product_id, review_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.put('/categories/:id/products/:product_id/reviews/:review_id', (request, reply) => {
    const { id, product_id, review_id } = request.params;
    const { comment } = request.body;
    fastify.mysql.query('UPDATE reviews SET comment = ? WHERE product_id = ? AND id = ?', [comment, product_id, review_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.delete('/categories/:id/products/:product_id/reviews/:review_id', (request, reply) => {
    const { id, product_id, review_id } = request.params;
    fastify.mysql.query('DELETE FROM reviews WHERE product_id = ? AND id = ?', [product_id, review_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.get('/categories/:id/products/:product_id/reviews/:review_id/comments', (request, reply) => {
    const { id, product_id, review_id } = request.params;
    fastify.mysql.query('SELECT c.id, c.comment FROM comments c JOIN reviews r ON c.review_id = r.id JOIN products p ON r.product_id = p.id JOIN categories ca ON p.category_id = ca.id WHERE ca.id = ? AND p.id = ? AND r.id = ?', [id, product_id, review_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.post('/categories/:id/products/:product_id/reviews/:review_id/comments', (request, reply) => {
    const { id, product_id, review_id } = request.params;
    const { comment } = request.body;
    fastify.mysql.query('INSERT INTO comments (comment, review_id) VALUES (?, ?)', [comment, review_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.get('/categories/:id/products/:product_id/reviews/:review_id/comments/:comment_id', (request, reply) => {
    const { id, product_id, review_id, comment_id } = request.params;
    fastify.mysql.query('SELECT id, comment FROM comments WHERE review_id = ? AND id = ?', [review_id, comment_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.put('/categories/:id/products/:product_id/reviews/:review_id/comments/:comment_id', (request, reply) => {
    const { id, product_id, review_id, comment_id } = request.params;
    const { comment } = request.body;
    fastify.mysql.query('UPDATE comments SET comment = ? WHERE review_id = ? AND id = ?', [comment, review_id, comment_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.delete('/categories/:id/products/:product_id/reviews/:review_id/comments/:comment_id', (request, reply) => {
    const { id, product_id, review_id, comment_id } = request.params;
    fastify.mysql.query('DELETE FROM comments WHERE review_id = ? AND id = ?', [review_id, comment_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.get('/categories/:id/products/:product_id/reviews/:review_id/comments/:comment_id/replies', (request, reply) => {
    const { id, product_id, review_id, comment_id } = request.params;
    fastify.mysql.query('SELECT r.id, r.comment FROM replies r JOIN comments c ON r.comment_id = c.id JOIN reviews re ON c.review_id = re.id JOIN products p ON re.product_id = p.id JOIN categories ca ON p.category_id = ca.id WHERE ca.id = ? AND p.id = ? AND re.id = ? AND c.id = ?', [id, product_id, review_id, comment_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.post('/categories/:id/products/:product_id/reviews/:review_id/comments/:comment_id/replies', (request, reply) => {
    const { id, product_id, review_id, comment_id } = request.params;
    const { comment } = request.body;
    fastify.mysql.query('INSERT INTO replies (comment, comment_id) VALUES (?, ?)', [comment, comment_id], function onResult(err, result) {
      reply.send(err || result);
    });
  });

  fastify.get('/categories/:id/products/:product_id/reviews/:review_id/comments/:comment_id/replies/:reply_id', (request, reply) => {
    const { id, product_id, review_id, comment_id, reply_id } = request.params;
    fastify.mysql.query('SELECT id, comment FROM replies WHERE comment_id = ? AND id = ?', [comment_id, reply_id], function onResult(err, result) {
      reply.send(err || result);
    })
  });

  fastify.put('/categories/:id/products/:product_id/reviews/:review_id/comments/:comment_id/replies/:reply_id', (request, reply) => {
    const { id, product_id, review_id, comment_id, reply_id } = request.params;
    const { comment } = request.body;
    fastify.mysql.query('UPDATE replies SET comment = ? WHERE comment_id = ? AND id = ?', [comment, comment_id, reply_id], function onResult(err, result) {
      reply.send(err || result);
    })
  });

  fastify.delete('/categories/:id/products/:product_id/reviews/:review_id/comments/:comment_id/replies/:reply_id', (request, reply) => {
    const { id, product_id, review_id, comment_id, reply_id } = request.params;
    fastify.mysql.query('DELETE FROM replies WHERE comment_id = ? AND id = ?', [comment_id, reply_id], function onResult(err, result) {
      reply.send(err || result);
    })
  });

}