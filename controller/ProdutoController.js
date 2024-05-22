const NotFoundError = require("../error/NotFoundError");
const RequiredParameterError = require("../error/RequiredParameterError");
const {ProdutoRepository} = require("../model");

class ProdutoController{
  async findAll(req, res) {
    const produtos = await ProdutoRepository.findAll();
    res.json(produtos);
  }
  async update(req, res) {
    try{
      // Teste de campos Obrigatorios
      if(!req.body.idProduto) throw new RequiredParameterError('idProduto')
      const produto = await ProdutoRepository.findOne({
        where:{
          idProduto:req.body.idProduto
        }
      })
      
      if(!produto) throw new NotFoundError('Produto')

      await ProdutoRepository.update({
        "nome":req.body.nome,
	      "quantidade":req.body.quantidade,
        "preco":req.body.preco
      },{
        where:{
          idProduto:req.body.idProduto
        }
      })

      const produtoUpdate = await ProdutoRepository.findOne({
        where:{
          idProduto:req.body.idProduto
        }
      })
      res.json(produtoUpdate);
    }catch(error)
    {
      return res.status(error.status||422 ).json(error)
    }
  }

  async delete(req, res) {
    try{
      // Teste de campos Obrigatorios
      if(!req.params.idProduto) throw new RequiredParameterError('idProduto')
      const produto = await ProdutoRepository.findOne({
        where:{
          idProduto:req.params.idProduto
        }
      })
      
      if(!produto) throw new NotFoundError('Produto')

      const produtoDeletado = await ProdutoRepository.destroy({
        where:{
          idProduto:req.params.idProduto
        }
      })

      res.json({message: "Produto removido com sucesso" });
    }catch(error)
    {
      return res.status(error.status||422 ).json(error)
    }
  }


  async create(req, res) {
    try{
      console.log(req.body)
      // Teste de campos Obrigatorios
      if(!req.body.nome) throw new RequiredParameterError('nome')
      if(!req.body.quantidade) throw new RequiredParameterError('quantidade')
      if(!req.body.preco) throw new RequiredParameterError('preco')

      const produtos = await ProdutoRepository.create({
        "nome":req.body.nome,
        "quantidade":req.body.quantidade,
        "preco":req.body.preco
      });
      return res.json(produtos);
    }catch(error)
    {
      if(error.name === 'SequelizeUniqueConstraintError')
      {
        return res.json({
          idError: "ALREADY_EXIST",
          message:  `Já existe cadastro com esse ${error.fields[0]}`
        })
        
      }
      return res.json(error)
    }
  }
}

module.exports = new ProdutoController();