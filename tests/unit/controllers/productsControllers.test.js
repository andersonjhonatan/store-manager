const chai = require("chai");
const sinonChai = require("sinon-chai");
const sinon = require("sinon");

chai.use(sinonChai);

const { expect } = chai;

const productsController = require("../../../src/controllers/products.Controller");
const productsService = require("../../../src/services/products.services");

const {
  getAllMocksProductsControllers,
  getProductMockIdControllers,
} = require("./mocks/productsMock");

describe("No mínimo 5% de linhas e tenha no mínimo 2 funções escritas nas camadas da sua aplicação", () => {
  describe("Testes para a camada de Controllers", () => {
    afterEach(() => sinon.restore());

    it("1 Funçao da camada de Controllers", async () => {
      sinon
        .stub(productsService, "getAllProductsService")
        .resolves(getAllMocksProductsControllers);
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getAllProductsController.get(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getAllMocksProductsControllers);
    });

    it("2 função na camada de Controllers", async () => {
      const res = {};
      const req = { params: { id: 1 }, body: { name: "example" } };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productsService, "getProductsServiceID")
        .resolves(getProductMockIdControllers);

      await productsController.getProductsControllerID.get(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({
        id: 1,
        name: "Martelo de Thor",
      });
    });
    it("Deve retornar a criação de um novo produto", async () => {
      const req = { body: { name: "Martelo do Batman" } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };

      sinon
        .stub(productsService, "createProducts")
        .resolves(getProductMockIdControllers);

      await productsController.createProductsController.post(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(getProductMockIdControllers);
    });

    it("Deve retornar um erro 500 em caso de falha na criação de um novo produto", async () => {
      const req = { body: { name: "Martelo do Batman" } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };
      sinon
        .stub(productsService, "createProducts")
        .throws(new Error("Database error"));

      await productsController.createProductsController.post(req, res);

      expect(res.status).to.have.been.calledWith(500);
      expect(res.json).to.have.been.calledWith({
        message: "Internal server error",
      });
    });
    it("Deve retornar a alteração de um novo produto", async () => {
      const req = { params: { id: 1 }, body: { name: "Martelo de Thor" } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };

      sinon
        .stub(productsService, "putIdProductsService")
        .resolves(getProductMockIdControllers);

      await productsController.putProductController.put(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getProductMockIdControllers);
    });
  });
});
