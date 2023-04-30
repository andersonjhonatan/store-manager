const express = require('express');
const salesController = require('../controllers/sales.Controller');
const validateSales = require('../middlewares/salesValidator');

const router = express.Router();

router.post('/sales', validateSales, salesController.postAllSalesController.post);
router.get('/sales', salesController.getSalesController.get);
router.get('/sales/:id', salesController.getSaleById.get);

module.exports = router;
