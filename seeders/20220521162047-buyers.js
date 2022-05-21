module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'buyers',
      [
        {
          name: 'SACADO 001',
          tradingName: 'SACADO 001 LTDA',
          cashforceTax: '0',
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
          phoneNumber: null,
          situation: null,
          situationDate: null,
          cnpjId: 1,
          confirm: 1,
          email: null,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Buyers', null, {});
  },
};
