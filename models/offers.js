const Offers = (sequelize, DataTypes) => {
  const Offers = sequelize.define('Offers', {
    tax: DataTypes.STRING,
    tariff: DataTypes.STRING,
    adValorem: DataTypes.STRING,
    float: DataTypes.STRING,
    iof: DataTypes.STRING,
    expiresIn: DataTypes.DATE,
    paymentStatusSponsor: DataTypes.INTEGER,
    paymentStatusProvider: DataTypes.INTEGER,
    orderId: { type: DataTypes.INTEGER, foreignKey: true },
    sponsorId: DataTypes.INTEGER,
  });

  return Offers;
};
