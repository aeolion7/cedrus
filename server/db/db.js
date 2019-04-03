const Sequelize = require('sequelize');
const pkg = require('../../package.json');
const dbName = pkg.name;

// Remember to create a database and change the name in package.json
// to the same name as the database!
// createdb myDB creates a new database with the name myDB.

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`
);

module.exports = db;
