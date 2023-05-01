const getAllProductsMock = [
  { id: 1, name: "Martelo de Thor" },
  { id: 2, name: "Traje de encolhimento" },
  { id: 3, name: "Escudo do Capitão América" },
];

const getProductsIdMOck = [{ name: "Martelo de Thor" }];

const expectError = {};
const nameInvalid = "";
const invalidProductId = 0;

const expectedError = [
  {
    id: 8,
    name: [
      {
        name: "Martelo do Batman",
      },
    ],
  },
];

module.exports = {
  getAllProductsMock,
  getProductsIdMOck,
  expectError,
  nameInvalid,
  invalidProductId,
  expectedError,
};
