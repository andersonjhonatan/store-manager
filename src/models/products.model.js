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

module.exports = { getAllProducts, getProductsId, createProducts };
