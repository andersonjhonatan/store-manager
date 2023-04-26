const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const getProductsId = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM products WHERE id = ?;',
    [id],
  );
  return result[0];
};

module.exports = { getAllProducts, getProductsId };
