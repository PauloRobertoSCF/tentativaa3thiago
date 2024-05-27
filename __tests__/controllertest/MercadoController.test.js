
const MercadoController = require('../MercadoController');
const MercadoModel = require('../MercadoModel');

jest.mock("../MercadoModel");

describe("Mercado Controller", () => {
    testEnvironment("controle de mercado", async () => {
        const request = {
            body: {
                nome: "Mercado 1"
            }
        }

        const reply = {
            code: jest.fn().mockReturnThis(),
            send: jest.fn()
        }

        await MercadoController.findALL(req, res);

        expect(MercadoModel.add).toHaveBeenCalledTimes(1);
        expect(MercadoModel.add).toHaveBeenCalledWith({
            nome: "Mercado 1"
        });
        expect(reply.code).toHaveBeenCalledWith(200);
    })
})