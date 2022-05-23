const Cnpj = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define('Cnpj', {
    cnpj: DataTypes.STRING,
    companyType: DataTypes.INTEGER,
  });




  return Cnpj;
};

module.exports = Cnpj;
