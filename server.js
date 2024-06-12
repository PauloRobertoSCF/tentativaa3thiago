const cors = require("cors");
const express = require ("express");
// conexão com o banco de dados
const db = require ("./model");
const routes = require ("./routes.js");

// Importa os modelos necessários
const {MercadoRepository,ProdutoRepository} = require("./model");


// Sincroniza o model com o banco de dados
db.sequelize.sync({
    force: true, // Use force: true apenas durante o desenvolvimento para recriar o banco de dados
  }).then(async () => {
    if(await MercadoRepository.count() <5)
    {
        // Adiciona mercados pré-registrados
        await MercadoRepository.bulkCreate([
          { nome: "Mercado 1"},
          { nome: "Mercado 2"},
          { nome: "Mercado 3"},
          { nome: "Mercado 4"},
          { nome: "Mercado 5"},
        ]);
    }
  
    if(await ProdutoRepository.count() <10)
    {
        // Adiciona produtos pré-registrados
        await ProdutoRepository.bulkCreate([
            { nome: "Produto 1", quantidade: 5, preco: 50},
            { nome: "Produto 2", quantidade: 5, preco: 100},
            { nome: "Produto 3", quantidade: 5, preco: 150},
            { nome: "Produto 4", quantidade: 10, preco: 200},
            { nome: "Produto 5", quantidade: 15, preco: 250},
            { nome: "Produto 6", quantidade: 15, preco: 300},
            { nome: "Produto 7", quantidade: 15, preco: 350},
            { nome: "Produto 8", quantidade: 15, preco: 400},
            { nome: "Produto 9", quantidade: 15, preco: 450},
            { nome: "Produto 10", quantidade: 15, preco: 500},
        ]);
    }
        
        console.info(`Banco de dados preenchido`);   
    });

// instancia o servidor Express
const app = express();

//configura o uso da resposta em formato json
app.use(express.json());

app.use(cors({
    origin: "*"
}));

//configura as rotas
app.use(routes);

// inicializa o express na porta 3000
app.listen(3000, () => console.log("Servidor iniciado em http://127.0.0.1:3000"));