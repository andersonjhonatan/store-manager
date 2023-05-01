const { expect } = require("chai");
const sinon = require("sinon");
const salesModel = require("../../../src/models/sales.model");
const connection = require("../../../src/models/connection");

const {expectedError, sales, salesIds, expectedInsertId, expectedItemsSold, getSales, invalidProductId} = require("./mocks/salesMock");

describe("Desenvolva testes que cubram no mínimo 15% de linhas e tenha no mínimo 4 funções", () => {
  describe("Crie endpoint para validar e cadastrar vendas", () => {
    afterEach(() => sinon.restore());

    it("Deve retornar erro se algum sales não existir", async () => {
      sinon.stub(connection, "query").resolves([[{ id: 1 }, { id: 2 }]]);
      const result = await salesModel.registerSales([{ productId: invalidProductId, quantity: 1 }], [invalidProductId]);
      expect(result).to.deep.equal(expectedError);
    });

    it('Se a venda foi realizada com sucesso', async () => {
      sinon.stub(connection, "query").resolves([[{ id: 1 }, { id: 2 }]]);
      sinon.stub(connection, "execute").resolves([{ insertId: expectedInsertId }]);
      const results = await salesModel.registerSales(sales, salesIds);
      expect(results).to.deep.equal({ id: expectedInsertId, itemsSold: expectedItemsSold });
    })

    it('Será validado que é possível listar todas as vendas', async () => {
      sinon.stub(connection, 'execute').resolves([getSales]);
      const result = await salesModel.getSales();
      expect(result).to.deep.an('array');
    })

    it('Será validado que é possível listar uma unica venda pelo id', async () => {
      sinon.stub(connection, 'execute').resolves([getSales]);
      const result = await salesModel.getSalesById();
      expect(result).to.deep.an('array');
    })
  });
});
