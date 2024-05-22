const InsuficientProductError = require("../error/InsuficientProductError");
const NotFoundError = require("../error/NotFoundError");
const RequiredParameterError = require("../error/RequiredParameterError");
const {ListaRepository,ProdutoRepository,MercadoRepository} = require("../model");


class ListaController{
  async findAll(req, res) {
    const listas = await ListaRepository.findAll({
      include: [{
        model: ProdutoRepository,
        as: "Produto"
      },{
        model: MercadoRepository,
        as: "Mercado"
      }]
    });
    res.json(listas);
  }
  async update(req, res) {
    try{
      // Teste de campos Obrigatorios
      if(!req.body.idLista) throw new RequiredParameterError('idLista')
      const lista = await ListaRepository.findOne({
        where:{
          idLista:req.body.idLista
        }
      })
      
      if(!lista) throw new NotFoundError('Mercado')

      await ListaRepository.update({
        "nome":req.body.nome
      },{
        where:{
          idLista:req.body.idLista
        }
      })

      const listaUpdate = await ListaRepository.findOne({
        where:{
          idLista:req.body.idLista
        }
      })
      res.json(listaUpdate);
    }catch(error)
    {
      return res.status(error.status||422 ).json(error)
    }
  }

  async delete(req, res) {
    try{
      // Teste de campos Obrigatorios
      if(!req.params.idLista) throw new RequiredParameterError('idLista')
      const lista = await ListaRepository.findOne({
        where:{
          idLista:req.params.idLista
        }
      })
      
      if(!lista) throw new NotFoundError('Mercado')

      const listaDeletada = await ListaRepository.destroy({
        where:{
          idLista:req.params.idLista
        }
      })

      res.json({message: "Lista removido com sucesso" });
    }catch(error)
    {
      return res.status(error.status||422 ).json(error)
    }
  }


    async create(req, res) {
      try{
        console.log(req.body)
        // Teste de campos Obrigatorios
        if(!req.body.idProduto) throw new RequiredParameterError('idProduto')
        if(!req.body.idMercado) throw new RequiredParameterError('idMercado')

        const produto = await ProdutoRepository.findOne({
          where:{
            idProduto:req.body.idProduto
          }
        })
        if(!produto) throw new NotFoundError('Produto')
        if(produto.quantidade <= 0) throw new InsuficientProductError()
        
        await ProdutoRepository.update({
          quantidade: produto.quantidade - 1
        },{
          where:{
            idProduto:produto.idProduto
          }
        })
        const listas = await ListaRepository.create({
          "idProduto":req.body.idProduto,
          "idMercado":req.body.idMercado,
          "preco":produto.preco
        });
        return res.json(listas);
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


module.exports  = new ListaController();