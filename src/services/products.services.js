const productsModel = require('../models/products.model');

const getAllProductsService = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const getProductsServiceID = async (id) => {
  const products = await productsModel.getProductsId(id);
  return products;
};

const createProducts = async (name) => {
  const products = await productsModel.createProducts(name);
  return products;
};

module.exports = {
  getAllProductsService,
  getProductsServiceID,
  createProducts,
};
