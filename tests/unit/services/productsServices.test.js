const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/connection");
const productService = require("../../../src/services/products.services");
const {
  getAllMocksService,
  getProductsIdMock,
  nameValidate,
  id
} = require("./mocks/productsMocksService");

describe("No mínimo 5% de linhas e tenha no mínimo 2 funções escritas nas camadas da sua aplicação", () => {
  describe("Testes para a camada de Services", () => {
    afterEach(() => sinon.restore());
    it("1 Funçao da camada de Services", async () => {
      sinon.stub(connection, "execute").resolves([getAllMocksService]);
      const result = await productService.getAllProductsService();
      expect(result).to.be.an("array");
    });
    it("2 função na camada de Services", async () => {
      sinon.stub(connection, "execute").resolves([getProductsIdMock]);
      const result = await productService.getProductsServiceID();
      expect(result).to.contains.keys("id");
      expect(result).to.contains.keys("name");
      expect(result).to.be.an("object");
    });
    it("3 função na camada de Services", async () => {
      sinon.stub(connection, "execute").resolves([getProductsIdMock]);
      const result = await productService.createProducts(nameValidate);
      expect(result).to.contains.keys("id");
      expect(result).to.contains.keys("name");
      expect(result).to.be.an("object");
    });
    it("4 função na camada de Services", async () => {
      sinon.stub(connection, "execute").resolves([getProductsIdMock]);
      const result = await productService.putIdProductsService(nameValidate, id);
      expect(result).to.contains.keys("id");
      expect(result).to.contains.keys("products");
      expect(result).to.be.an("object");
    });
  });
});
