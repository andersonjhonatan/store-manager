const { expect } = require("chai");
const sinon = require("sinon");
const productsModel = require("../../../src/models/products.model");
const connection = require("../../../src/models/connection");
const {
  getAllProductsMock,
  getProductsIdMOck,
  invalidProductId,
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
      const result = await productsModel.getProductsId();
      expect(result).to.contains.keys("name");
      expect(result).to.be.an("object");
    });

    it("Deve retornar erro se algum name não existir", async () => {
      sinon.stub(connection, "query").resolves([getAllProductsMock]);
      const result = await productsModel.createProducts(getProductsIdMOck);
      return result
    });

    it("Deve retornar uma nova alteração na requisição", async () => {
      sinon.stub(connection, "query").resolves([{ id: 1, name: "produto" }]);
      const result = await productsModel.putProductId(
        [{ id: invalidProductId, name: "teste" }],
        [{}]
      );
      expect(result).to.contains.keys("id");
      expect(result).to.contains.keys("products");
      expect(result).to.be.an("object");
    });
  });
});
