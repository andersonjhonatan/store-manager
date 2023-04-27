const express = require('express');

const router = express.Router();
const productsController = require('../controllers/products.Controller');
const productsValidator = require('../middlewares/productsValidator');

router.get('/products', productsController.getAllProductsController.get);
router.get(
  '/products/:id',
  productsValidator,
  productsController.getProductsControllerID.get,
);
router.post('/products', productsController.createProductsController.post);

module.exports = router;
