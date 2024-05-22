const express = require ("express");
const MercadoController = require ("./controller/MercadoController");
const ProdutoController = require ("./controller/ProdutoController");
const ListaController = require ("./controller/ListaController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ name: "Ciclano Fulano" });
});

routes.get("/mercados", (req, res) => {
    return MercadoController.findAll(req,res);
  });
routes.post("/mercados", (req, res) => {
return MercadoController.create(req,res);
});
routes.put("/mercados", (req, res) => {
return MercadoController.update(req,res);
});
routes.delete("/mercados/:idMercado", (req, res) => {
return MercadoController.delete(req,res);
});

////////////////////////////////////////////////

routes.get("/produtos", (req, res) => {
  return ProdutoController.findAll(req,res);
});
routes.post("/produtos", (req, res) => {
return ProdutoController.create(req,res);
});
routes.put("/produtos", (req, res) => {
return ProdutoController.update(req,res);
});
routes.delete("/produtos/:idProduto", (req, res) => {
return ProdutoController.delete(req,res);
});

////////////////////////////////////////////////

routes.get("/listas", (req, res) => {
  return ListaController.findAll(req,res);
});
routes.post("/listas", (req, res) => {
return ListaController.create(req,res);
});
routes.put("/listas", (req, res) => {
return ListaController.update(req,res);
});
routes.delete("/listas/:idLista", (req, res) => {
return ListaController.delete(req,res);
});

////////////////////////////////////////////////

module.exports=routes;