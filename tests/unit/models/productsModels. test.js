const { expect } = require("chai");
const sinon = require("sinon");
const productsModel = require("../../../src/models/products.model");
const connection = require("../../../src/models/connection");
const {
  getAllProductsMock,
  getProductsIdMOck,
} = require("./mocks/ProductsMOck");

describe("No mínimo 5% de linhas e tenha no mínimo 2 funções escritas nas camadas da sua aplicação", () => {
  describe("Testes para a camada de Models", () => {
    afterEach(() => sinon.restore());
    it("1 Funçao da camada de Models", async () => {
      sinon.stub(connection, "execute").resolves([getAllProductsMock]);
      const resultALL = await productsModel.getAllProducts();
      expect(resultALL).to.be.an("array");
      expect(resultALL).to.be.length(3);
    });
    
    it("2 função na camada de Models", async () => {
      sinon.stub(connection, "execute").resolves([getProductsIdMOck]);
      const productsID = await productsModel.getProductsId();
      expect(productsID).to.be.an("object");
    });
  });
});
