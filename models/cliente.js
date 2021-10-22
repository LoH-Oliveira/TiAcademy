'use strict';
const {
  Model
} = require('sequelize');
const pedidos = require('./pedidos');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cliente.hasMany(models.pedidos)
    }
  };
  Cliente.init({
    Nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY,
    ClienteDesde: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};