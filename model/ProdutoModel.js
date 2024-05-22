// const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    console.log(sequelize)
    const Produto = sequelize.define("ProdutoRepository", {
      idProduto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantidade: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      limiteProduto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue:10
      },
    },{
      tableName: 'produto'
    })
    Produto.associate = (models) => {
      Produto.hasOne(models.ListaRepository, {
        foreignKey: 'idProduto',
        as: 'Lista'
      })
    }
    return Produto
   };