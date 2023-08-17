const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');


const Skill = sequelize.define('Skill', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // Отключение автоматического добавления полей createdAt и updatedAt
}
);

module.exports = Skill;
