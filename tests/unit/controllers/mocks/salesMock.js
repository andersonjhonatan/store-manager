const postAllSales = [
  [
    {
      id: 3,
      itemsSold: [
        {
          productId: 1,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    },
  ],
];
const errorProductId = [
  {
    id: 3,
    itemsSold: [
      {
        quantity: 1,
      },
      {
        quantity: 5,
      },
    ],
  },
];

const messagProduct = {
  message: "Product not found",
};

const messageSaleNotFound = {
  message: "Sale not found",
};

const getSales = [
  {
    date: "2023-05-01T16:13:30.000Z",
    saleId: 1,
    productId: 1,
    quantity: 5,
  },
  {
    date: "2023-05-01T16:13:30.000Z",
    saleId: 1,
    productId: 2,
    quantity: 10,
  },
  {
    date: "2023-05-01T16:13:30.000Z",
    saleId: 2,
    productId: 3,
    quantity: 15,
  },
];


const getSalesId = [
	{
		date: "2023-05-01T16:13:30.000Z",
		productId: 1,
		quantity: 5
	},
	{
		date: "2023-05-01T16:13:30.000Z",
		productId: 2,
		quantity: 10
	}
]

module.exports = {
  postAllSales,
  errorProductId,
  messagProduct,
  getSales,
  messageSaleNotFound,
  getSalesId,
};
