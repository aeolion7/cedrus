const db = require('../db');
const Sequelize = require('sequelize');

const Test = db.define('test', {
  name: {
    type: Sequelize.STRING,
  },
  count: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Test;
