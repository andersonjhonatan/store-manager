const express = require('express');
const salesController = require('../controllers/sales.Controller');
const { salesValidators, saleNotFound } = require('../middlewares/salesValidator');

const router = express.Router();

router.post('/sales', salesValidators, salesController.postAllSalesController.post);
router.get('/sales', salesController.getSalesController.get);
router.get('/sales/:id', salesController.getSaleById.get);
router.delete('/sales/:id', saleNotFound, salesController.deleteSales.delete);
router.put('/sales/:id', salesValidators, salesController.putsalesController.put);

module.exports = router;
