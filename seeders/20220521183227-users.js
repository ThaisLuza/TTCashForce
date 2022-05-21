module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'ALLAN SOUZA',
          email: 'allan@cashforce.com.br',
          phoneNumber: null,
          mobile: null,
          departament: null,
          verificationCode: '',
          emailChecked: 1,
          cashforceAdm: 1,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
