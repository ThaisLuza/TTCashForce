const cnpj = (sequelize, DataTypes) => {
  const cnpj = sequelize.define('cnpj', {
    cnpj: DataTypes.STRING,
    companyType: DataTypes.INTEGER,
  });

  return cnpj;
};

module.exports = cnpj;
