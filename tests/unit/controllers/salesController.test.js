const chai = require("chai");
const sinonChai = require("sinon-chai");
const sinon = require("sinon");
const salesController = require("../../../src/controllers/sales.Controller");
const salesService = require("../../../src/services/sales.services");
const {
  postAllSales,
  errorProductId,
  getSales,
  messagProduct,
  getSalesId,
  messageSaleNotFound,
} = require("./mocks/salesMock");

chai.use(sinonChai);

const { expect } = chai;

describe("testar todas as funçoes do controller", () => {
  afterEach(() => sinon.restore());
  describe("Testes para a camada de Controllers", () => {
    it("1 Funçao da camada de Controllers do endpoint sales", async () => {
      const req = { body: postAllSales };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };

      sinon.stub(salesService, "postAllSaleServices").resolves([postAllSales]);

      await salesController.postAllSalesController.post(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith([postAllSales]);
    });
    it("Deve retornar erro se algum sales não existir", async () => {
      const req = { body: errorProductId };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };

      await salesController.postAllSalesController.post(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith(messagProduct);
    });
    it("Retornar todas as sales", async () => {
      const req = { body: getSales };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };

      sinon.stub(salesService, "getBySales").resolves(getSales);

      await salesController.getSalesController.get(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getSales);
    });
    it("Deve retornar so as sales por id", async () => {
      const req = { params: { id: 1 } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };

      sinon.stub(salesController, 'getSaleById').resolves([getSalesId])

      await salesController.getSaleById.get(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledBefore(getSalesId);
    });
    it("Deve retornar sale not found", async () => {
      const req = { params: { id: 0 } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };

      sinon.stub(salesController, 'getSaleById').resolves([getSalesId])

      await salesController.getSaleById.get(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith(messageSaleNotFound);
    });
  });
});
