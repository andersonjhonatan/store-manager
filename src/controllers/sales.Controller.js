const salesService = require('../services/sales.services');

const postAllSalesController = {
  post: async (req, res) => {
    const sales = req.body;

    const productIds = sales.map(({ productId }) => productId);

    const result = await salesService.postAllSaleServices(sales, productIds);

    if (!result || result.status === 404) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(201).json(result);
  },
};

const getSalesController = {
  get: async (req, res) => {
    const productSales = await salesService.getBySales();
    return res.status(200).json(productSales);
  },
};

const getSaleById = {
  get: async (req, res) => {
    const { id } = req.params;
    const productsID = await salesService.getSalesById(id);
    const newSales = productsID.map(({ saleId, ...rest }) => rest);
    if (!newSales.length) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(newSales);
  },
};

const deleteSales = {
  delete: async (req, res) => {
    const { id } = req.params;
    await salesService.deleteSales(id);
    return res.status(204).end();
  },
};

const putsalesController = {
  put: async (req, res) => {
    const { id } = req.params;
    const sales = req.body;

    const productIds = sales.map(({ productId }) => productId);

    const result = await salesService.putSales(sales, productIds, id);

    if (result.status) {
      const { message, status } = result;
      return res.status(status).json({ message });
    }

    return res.status(200).json({ saleId: id, itemsUpdated: sales });
  },
};

module.exports = {
  postAllSalesController,
  getSalesController,
  getSaleById,
  deleteSales,
  putsalesController,
};
