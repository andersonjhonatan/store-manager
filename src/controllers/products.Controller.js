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

module.exports = { getAllProductsController, getProductsControllerID };
