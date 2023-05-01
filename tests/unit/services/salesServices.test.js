const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/connection");
const salesService = require("../../../src/services/sales.services");

const { postAllSales, expectedInsertId } = require("./mocks/salesMocksService");

describe("Desenvolva testes que cubram no mínimo 25% de linhas e tenha no mínimo 7 funções escritas nas camadas da sua aplicação", () => {
  afterEach(() => sinon.restore());
  describe("Será validado que é possível listar todas as vendas", () => {
    it("Ao listar vendas com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http 200", async () => {
      sinon.stub(connection, "execute").resolves([postAllSales]);
      const result = await salesService.postAllSaleServices(postAllSales, [1]);
      expect(result).to.contains.keys("id");
      expect(result).to.contains.keys("itemsSold");
      expect(result).to.be.an("object");
    });
    it("Listar todas as vendas com sucesso", async () => {
      sinon.stub(connection, "execute").resolves([postAllSales]);
      const result = await salesService.getBySales();
      expect(result).to.be.an.instanceOf(Array);
      expect(result).to.have.lengthOf(2);
      expect(result).to.deep.equal(postAllSales);
    });

    it("Listar só uma venda que tenha um id com sucesso", async () => {
      sinon.stub(connection, "execute").resolves([postAllSales]);
      const result = await salesService.getSalesById(expectedInsertId, [1]);
      result.forEach((sale) => {
        sale.date = sale.date.toISOString();
      });

      expect(result).to.be.an.instanceOf(Array);
      expect(result).to.have.length(2);
      expect(result).to.deep.equal(result);
    });
  });
});
