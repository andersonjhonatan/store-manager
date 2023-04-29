const express = require('express');
const salesController = require('../controllers/sales.Controller');
const validateSales = require('../middlewares/salesValidator');

const router = express.Router();

router.post('/sales', validateSales, salesController.post);

module.exports = router;
