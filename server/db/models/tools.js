const db = require('../db');
const Sequelize = require('sequelize');

const Tool = db.define('tool', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('open', 'shared'),
  },
  pictureUrl: {
    type: Sequelize.STRING,
  },
  description: Sequelize.TEXT,
  features: Sequelize.ARRAY(Sequelize.TEXT),
  loanDuration: Sequelize.INTEGER,
  borrowQueue: Sequelize.ARRAY(Sequelize.INTEGER),
});

module.exports = Tool;
