const Orderportions = (sequelize, DataTypes) => {
  const Orderportions = sequelize.define('orderportions', {
    nDup: DataTypes.STRING,
    dVenc: DataTypes.STRING,
    vDup: DataTypes.STRING,
    availableToMarket: DataTypes.INTEGER,
    orderId: { type:DataTypes.INTEGER, foreignKey: true },
  });

  Orderportions.associate = (models) => {
    Orderportions.belongsTo(models.order,
      { foreignKey: 'id', as: 'orderPortions_ibfk_1'})
  }

  return Orderportions;
};

module.exports = Orderportions;




