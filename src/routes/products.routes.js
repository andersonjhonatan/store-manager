const express = require('express');

const router = express.Router();
const productsController = require('../controllers/products.Controller');
const {
  productsValidator,
  validateNameIsRequired,
} = require('../middlewares/productsValidator');

router.get('/products', productsController.getAllProductsController.get);

router.get(
  '/products/:id',
  productsValidator,
  productsController.getProductsControllerID.get,
);

router.post(
  '/products',
  validateNameIsRequired,
  productsController.createProductsController.post,
);

router.put('/products/:id',
  productsValidator,
  validateNameIsRequired,
  productsController.putProductController.put);

module.exports = router;
