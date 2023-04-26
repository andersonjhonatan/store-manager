const productsModel = require('../models/products.model');

const productsValidator = async (req, res, next) => {
  const productID = req.params.id;
  const product = await productsModel.getProductsId(productID);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = productsValidator;
