const productsService = require('../services/products.services');

const getAllProductsController = {
  get: async (req, res) => {
    const products = await productsService.getAllProductsService();
    return res.status(200).json(products);
  },
};

const getProductsControllerID = {
  get: async (req, res) => {
    const { id } = req.params;
    const productsID = await productsService.getProductsServiceID(id);
    return res.status(200).json(productsID);
  },
};

const createProductsController = {
  post: async (req, res) => {
    const { name } = req.body;
    const products = await productsService.createProducts(name);
    return res.status(201).send(products);
  },
};

module.exports = { getAllProductsController, getProductsControllerID, createProductsController };
