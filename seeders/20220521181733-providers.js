module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'providers',
      [
        {
          name: 'CEDENTE 002',
          tradingName: 'CEDENTE 002 LTDA',
          cashforceTax: null,
          responsibleName: null,
          responsibleEmail: null,
          responsiblePosition: null,
          responsiblePhone: null,
          responsibleMobile: null,
          website: null,
          postalCode: null,
          address: null,
          number: null,
          complement: null,
          neighborhood: null,
          city: null,
          state: null,
          bank: null,
          bankAgency: null,
          account: null,
          documents:  null,
          phoneNumber: null,
          situation: null,
          situationDate: null,
          cnpjId: 2,
          email: null,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Providers', null, {});
  },
};
