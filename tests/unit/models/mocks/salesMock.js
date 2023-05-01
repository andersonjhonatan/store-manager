const sales = [
  { productId: 1, quantity: 2 },
  { productId: 2, quantity: 1 },
];
const salesIds = [1, 2];
const expectedInsertId = 1;
const invalidProductId = 3;
const expectedError = { status: 404, message: "Product not found" };

const expectedItemsSold = [
  { productId: 1, quantity: 2 },
  { productId: 2, quantity: 1 },
];

const getSales = [
  {
    date: "2023-05-01T11:55:48.000Z",
    saleId: 1,
    productId: 1,
    quantity: 5,
  },
  {
    date: "2023-05-01T11:55:48.000Z",
    saleId: 1,
    productId: 2,
    quantity: 10,
  },
];

module.exports = {
  sales,
  salesIds,
  expectedInsertId,
  expectedItemsSold,
  getSales,
  invalidProductId,
  expectedError,
};
