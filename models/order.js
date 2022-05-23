const { Buyer } = require('../models')

const Order = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    orderNfId: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    cnpjId: { type: DataTypes.INTEGER, foreignKey: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    buyerId: { type: DataTypes.INTEGER, foreignKey: true },
    providerId: { type: DataTypes.INTEGER, foreignKey: true },
    orderStatusBuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING,
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING,
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Cnpj, { foreignKey: 'id', as: 'orders_ibfk_141' });
    // Order.belongsTo(models.Users,
    //   { foreignKey: 'id', as: 'orders_ibfk_142' }),
    // Order.belongsTo(models.Buyers,
    //   { foreignKey: 'id', as: 'orders_ibfk_139' }),
    // Order.belongsTo(models.Provider,
    //   { foreignKey: 'id', as: 'providers_ibfk_1' })
  };

  
  
  return Order;
};





module.exports =  Order;
