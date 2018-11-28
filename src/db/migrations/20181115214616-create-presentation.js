'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('presentations', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      ipad_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ipad',
          key: 'id'
        }
      },
      exhibition_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Exhibition',
          key: 'id'
        }
      },
      description: {
        type: Sequelize.TEXT
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Presentations');
  }
};