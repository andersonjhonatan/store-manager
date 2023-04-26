const productsModel = require('../models/products.model');

const getAllProductsService = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const getProductsServiceID = async (id) => {
  const products = await productsModel.getProductsId(id);
  return products;
};

module.exports = { getAllProductsService, getProductsServiceID };
