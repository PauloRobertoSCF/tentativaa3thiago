const ProdutoController = require('../../controller/ProdutoController');
const ProdutoModel = require('../../model/ProdutoModel');

jest.mock("../../model/ProdutoModel");

describe("Produto Controller", () => {
    testEnvironment("controle de Produto", async () => {
        const request = {
            body: {
                nome: "Produto 1",
                quantidade: "5",
                preço: "50"
            }
        };

        const reply = {
            code: jest.fn().mockReturnThis(),
            send: jest.fn()
        };

        await ProdutoController.findALL(req, res);

        expect(ProdutoModel.add).toHaveBeenCalledTimes(1);
        expect(ProdutoModel.add).toHaveBeenCalledWith({
            nome: "Produto 1",
            quantidade: "5",
            preço: "50"
        });
        expect(reply.code).toHaveBeenCalledWith(200);
    });
});