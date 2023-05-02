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

const putIdProductsService = async (name, id) => {
  const products = await productsModel.putProductId(name, id);
  return products;
};

const deleteProductsService = async (id) => {
  const products = await productsModel.deleteProducts(id);
  return products;
};

const searchNameService = async (name) => {
  const productsName = await productsModel.searchProducts(name);
  return productsName;
};

module.exports = {
  getAllProductsService,
  getProductsServiceID,
  createProducts,
  putIdProductsService,
  deleteProductsService,
  searchNameService,
};
