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

const createProducts = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?);',
    [name],
  );
  return { id: insertId, name };
};

const putProductId = async (name, id) => {
  const [products] = await connection.query(
    'UPDATE products SET name = ? WHERE id = ?;',
    [name, id],
  );
  return { id, products };
};

module.exports = {
  getAllProducts,
  getProductsId,
  createProducts,
  putProductId,
};
