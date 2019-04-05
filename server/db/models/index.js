const User = require('./users');
const Tool = require('./tools');

User.hasMany(Tool);
Tool.belongsTo(User);

module.exports = {
  User,
  Tool,
};
