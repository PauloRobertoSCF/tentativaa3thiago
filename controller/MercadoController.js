const NotFoundError = require("../error/NotFoundError");
const RequiredParameterError = require("../error/RequiredParameterError");
const {MercadoRepository} = require("../model");

class MercadoController{
  async findAll(req, res) {
    const mercados = await MercadoRepository.findAll();
    res.json(mercados);
  }
  async update(req, res) {
    try{
      // Teste de campos Obrigatorios
      if(!req.body.idMercado) throw new RequiredParameterError('idMercado')
      const mercado = await MercadoRepository.findOne({
        where:{
          idMercado:req.body.idMercado
        }
      })
      
      if(!mercado) throw new NotFoundError('Mercado')

      await MercadoRepository.update({
        "nome":req.body.nome
      },{
        where:{
          idMercado:req.body.idMercado
        }
      })

      const mercadoUpdate = await MercadoRepository.findOne({
        where:{
          idMercado:req.body.idMercado
        }
      })
      res.json(mercadoUpdate);
    }catch(error)
    {
      return res.status(error.status||422 ).json(error)
    }
  }

  async delete(req, res) {
    try{
      // Teste de campos Obrigatorios
      if(!req.params.idMercado) throw new RequiredParameterError('idMercado')
      const mercado = await MercadoRepository.findOne({
        where:{
          idMercado:req.params.idMercado
        }
      })
      
      if(!mercado) throw new NotFoundError('Mercado')

      const mercadoDeletado = await MercadoRepository.destroy({
        where:{
          idMercado:req.params.idMercado
        }
      })

      res.json({message: "Mercado removido com sucesso" });
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

        const mercados = await MercadoRepository.create({
          "nome":req.body.nome
        });
        return res.json(mercados);
      }catch(error)
      {
        if(error.name === 'SequelizeUniqueConstraintError')
        {
          return res.status(422).json({
            idMercadoError: "ALREADY_EXIST",
            message:  `Já existe cadastro com esse ${error.fields[0]}`
          })
          
        }
        return res.json(error)
      }
    }

}

module.exports  = new MercadoController();