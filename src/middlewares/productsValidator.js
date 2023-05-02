const productsModel = require('../models/products.model');

const productsValidator = async (req, res, next) => {
  const productID = req.params.id;
  const product = await productsModel.getProductsId(productID);
  if (!product) {
    return res.status(404).json({ message: ' S not found' });
  }
  next();
};

const validateNameIsRequired = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (name.length < 5) {
    return res
      .status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

module.exports = { productsValidator, validateNameIsRequired };
