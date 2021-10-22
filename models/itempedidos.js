'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemPedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ItemPedidos.belongsTo(models.Pedidos);
      ItemPedidos.belongsTo(models.Servico);
    }
  };
  ItemPedidos.init({
    Quantidade: DataTypes.INTEGER,
    Valor: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'ItemPedidos',
  });
  return ItemPedidos;
};