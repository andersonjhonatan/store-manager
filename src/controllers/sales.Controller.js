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
module.exports = postAllSalesController;
