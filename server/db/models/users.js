const db = require('../db');
const Sequelize = require('sequelize');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 5.0,
    },
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  radiusInMiles: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = User;
