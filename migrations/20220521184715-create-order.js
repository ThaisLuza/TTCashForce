'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderNfId: {
        type: Sequelize.STRING
      },
      orderNumber: {
        type: Sequelize.STRING
      },
      orderPath: {
        type: Sequelize.STRING
      },
      orderFileName: {
        type: Sequelize.STRING
      },
      orderOriginalName: {
        type: Sequelize.STRING
      },
      emissionDate: {
        type: Sequelize.STRING
      },
      pdfFile: {
        type: Sequelize.STRING
      },
      emitedTo: {
        type: Sequelize.STRING
      },
      nNf: {
        type: Sequelize.STRING
      },
      CTE: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'cnpjs',
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      buyerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'buyers',
          key: 'id',
        },
      },
      providerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'providers',
          key: 'id',
        },
      },
      orderStatusBuyer: {
        type: Sequelize.STRING
      },
      orderStatusProvider: {
        type: Sequelize.STRING
      },
      deliveryReceipt: {
        type: Sequelize.STRING
      },
      cargoPackingList: {
        type: Sequelize.STRING
      },
      deliveryCtrc: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};