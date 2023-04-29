const connection = require('./connection');

const registerSales = async (sales, salesIds) => {
  const [existingProducts] = await connection.query(
    'SELECT id FROM products WHERE id IN (?);',
    [salesIds],
  );

  const existingProductIds = existingProducts.map(({ id }) => id);

  const invalidProductIds = salesIds.filter((id) => !existingProductIds.includes(id));

  if (invalidProductIds.length) return { status: 404, message: 'Product not found' };

  const [{ insertId }] = await connection.execute('INSERT INTO sales (date) VALUES (NOW());');

  const itemsSold = await Promise.all(
    sales.map(async ({ productId, quantity }) => {
      await connection.execute(
        'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
        [insertId, productId, quantity],
      );
      return { productId, quantity };
    }),
  );

  return { id: insertId, itemsSold };
};

module.exports = { registerSales };
