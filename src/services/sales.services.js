const getAllSalesModel = require('../models/sales.model');

const postAllSaleServices = async (sales, salesIds) => {
  const result = await getAllSalesModel.registerSales(sales, salesIds);
  return result;
};

module.exports = { postAllSaleServices };
