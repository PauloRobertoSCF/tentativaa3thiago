'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

var start = new Date().getTime();

// Cria a conexão com o banco de dados
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/database.sqlite'
  });

console.log('Tempo de instanciação Sequelize: ' + (new Date().getTime() - start) + "ms");

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes, Sequelize.Op);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;