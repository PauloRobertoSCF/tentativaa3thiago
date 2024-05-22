// const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  console.log(sequelize)
  const Lista = sequelize.define("ListaRepository", {
    idLista: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    idProduto: {
      type: DataTypes.INTEGER,
      references: {
        model: "produto", // 'Actors' would also work
        key: 'idProduto'
      },
      allowNull: false,
    },
    idMercado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "mercado", // 'Actors' would also work
        key: 'idMercado'
      }
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },{
    tableName: 'lista'
  })
  Lista.associate = (models) => {
    Lista.belongsTo(models.ProdutoRepository, {
      foreignKey: 'idProduto',
      as: 'Produto'
    })
    Lista.belongsTo(models.MercadoRepository, {
      foreignKey: 'idMercado',
      as: 'Mercado'
    })
  }
  return Lista
 };