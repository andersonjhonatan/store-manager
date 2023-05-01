const sales = require('../models/sales.model');

const salesValidators = (req, res, next) => {
  const { body } = req;

  if (body.some(({ productId }) => !productId)) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  if (body.some(({ quantity }) => quantity === undefined)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  if (body.some(({ quantity }) => quantity <= 0)) {
    return res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

const saleNotFound = async (req, res, next) => {
  const result = req.params.id;
  const salesResult = await sales.deleteSalesId(result);
  if (!salesResult.affectedRows) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  next();
};

module.exports = { salesValidators, saleNotFound };
