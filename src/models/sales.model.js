const connection = require('./connection');

const registerSales = async (sales, salesIds) => {
  const [existingProducts] = await connection.query(
    'SELECT id FROM products WHERE id IN (?);'[salesIds],
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

const getSales = async () => {
  const [result] = await connection.execute(
    `SELECT sd.date,
    sp.sale_id AS saleId,
    sp.product_Id AS productId,
    sp.quantity
    FROM sales_products
    AS sp
    INNER JOIN sales AS sd
    ON sp.sale_id = sd.id
    ORDER BY sp.sale_id ASC;`,
  );
  return result;
};

const getSalesById = async (id) => {
  const [salesById] = await connection.query(
    `
  SELECT sd.date,
    sp.sale_id AS saleId,
    sp.product_Id AS productId,
    sp.quantity
    FROM sales_products
    AS sp
    INNER JOIN sales AS sd
    ON sp.sale_id = sd.id
    WHERE
    sd.id = ?
    ORDER BY sp.sale_id ASC;`,
    [id],
  );
  return salesById;
};

const deleteSalesId = async (id) => {
  const [result] = await connection.query('DELETE FROM sales WHERE id = ?', [
    id,
  ]);
  return result;
};

const putSales = async (sales, ids, saleId) => {
  const [[existingSale]] = await connection.query(
    'SELECT id FROM sales WHERE id IN (?);', [saleId],
  );

  if (!existingSale) return { status: 404, message: 'Sale not found' };

  const [existproducts] = await connection.query('SELECT id FROM products WHERE id IN (?);', [ids]);

  const existingProductIds = existproducts.map(({ id }) => id);

  const invalidProductIds = ids.filter((id) => !existingProductIds.includes(id));

  if (invalidProductIds.length) return { status: 404, message: 'Product not found' };

  await Promise.all(
    sales.map(async (sale) => {
      await connection.execute(
        'UPDATE StoreManager.sales_products SET quantity = ? WHERE sale_id = ? AND product_id = ?;',
        [sale.quantity, saleId, sale.productId],
      );
    }),
  );

  return {};
};

module.exports = {
  registerSales,
  getSales,
  getSalesById,
  deleteSalesId,
  putSales,
};
