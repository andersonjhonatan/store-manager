module.exports = (req, res, next) => {
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
