'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Specializations', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      specializationTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'SpecializationTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',  
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Specializations');
  },
};
