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
    try {
      const product = await productsService.createProducts(name);
      return res.status(201).json(product);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};

const putProductController = {
  put: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const newProducts = { name, id };
    await productsService.putIdProductsService(name, id);
    return res.status(200).json(newProducts);
  },
};

module.exports = {
  getAllProductsController,
  getProductsControllerID,
  createProductsController,
  putProductController,
};
