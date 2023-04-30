const getAllSalesModel = require('../models/sales.model');

const postAllSaleServices = async (sales, salesIds) => {
  const result = await getAllSalesModel.registerSales(sales, salesIds);
  return result;
};

const getBySales = async () => {
  const prdoctSales = await getAllSalesModel.getSales();
  return prdoctSales;
};

const getSalesById = async (id) => {
  const salesId = await getAllSalesModel.getSalesById(id);
  return salesId;
};

module.exports = { postAllSaleServices, getBySales, getSalesById };
