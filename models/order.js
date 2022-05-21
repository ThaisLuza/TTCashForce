const Order = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
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
    cnpjId: { type:DataTypes.INTEGER, foreignKey: true },
    userId: { type:DataTypes.INTEGER, foreignKey: true },
    buyerId: { type:DataTypes.INTEGER, foreignKey: true },
    providerId: { type:DataTypes.INTEGER, foreignKey: true },
    orderStatusBuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING,
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING
  });


  Provider.associate = (models) => {
    Provider.belongsTo(models.Cnpj,
      { foreignKey: 'id', as: 'orders_ibfk_141' }),
    Provider.belongsTo(models.Users,
      { foreignKey: 'id', as: 'orders_ibfk_142' }),
    Provider.belongsTo(models.Buyers,
      { foreignKey: 'id', as: 'orders_ibfk_139' }),
    Provider.belongsTo(models.Providers,
      { foreignKey: 'id', as: 'orders_ibfk_140' })
  };

  return Order;
};

module.exports = Order;



