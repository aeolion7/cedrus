const db = require('../db');
const Sequelize = require('sequelize');

const Tool = db.define('tool', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('open', 'shared'),
    allowNull: false,
  },
  pictureUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: Sequelize.TEXT,
  features: Sequelize.ARRAY(Sequelize.TEXT),
  loanDuration: Sequelize.INTEGER,
  borrowQueue: Sequelize.ARRAY(Sequelize.INTEGER),
});

module.exports = Tool;
