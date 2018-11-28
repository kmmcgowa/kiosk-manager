module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ipads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      asset_number: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      ipad_model: {
        type: Sequelize.STRING
      },
      ios_version: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ipads');
  }
};