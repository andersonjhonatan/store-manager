const getAllSalesModel = require('../models/sales.model');

const postAllSaleServices = async (sales, salesIds) => {
  const salesResult = await getAllSalesModel.registerSales(sales, salesIds);
  return salesResult;
};

const getBySales = async () => {
  const salesResult = await getAllSalesModel.getSales();
  return salesResult;
};

const getSalesById = async (name, id) => {
  const salesResult = await getAllSalesModel.getSalesById(name, id);
  return salesResult;
};

const deleteSales = async (id) => {
  const salesResult = await getAllSalesModel.deleteSalesId(id);
  return salesResult;
};

module.exports = { postAllSaleServices, getBySales, getSalesById, deleteSales };
