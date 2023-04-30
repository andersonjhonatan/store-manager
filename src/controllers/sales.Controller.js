const postSalesService = require('../services/sales.services');

const postAllSalesController = {
  post: async (req, res) => {
    const sales = req.body;

    const productIds = sales.map(({ productId }) => productId);

    const result = await postSalesService.postAllSaleServices(
      sales,
      productIds,
    );

    if (!result || result.status === 404) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(201).json(result);
  },
};

const getSalesController = {
  get: async (req, res) => {
    const productSales = await postSalesService.getBySales();
    return res.status(200).json(productSales);
  },
};

const getSaleById = {
  get: async (req, res) => {
    const { id } = req.params;
    const productsID = await postSalesService.getSalesById(id);
    const newSales = productsID.map(({ saleId, ...rest }) => rest);
    if (!newSales.length) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(newSales);
  },
};
module.exports = { postAllSalesController, getSalesController, getSaleById };
