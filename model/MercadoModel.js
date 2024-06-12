// const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  console.log(sequelize)
  const Mercado = sequelize.define("MercadoRepository", {
    idMercado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    tableName: 'mercado'
  })
  Mercado.associate = (models) => {
    Mercado.hasOne(models.ListaRepository, {
      foreignKey: 'idMercado',
      as: 'Lista'
    })
  }


  return Mercado
 };