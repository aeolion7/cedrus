/* Be sure to import your models here.
  const Dog = require('./dog');
  const Owner = require('.owner');
*/
const Test = require('./test');

/* Set assocations here
  Owner.hasMany(Dog);
  Dog.belongsTo(Owner);
*/

// Export the updated models with associations
module.exports = {
  // Dog,
  // Owner
  Test,
};
