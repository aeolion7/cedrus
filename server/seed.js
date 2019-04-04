const db = require('./db');
const { Test } = require('./db/models/index');
const { green, yellow, red } = require('chalk');

async function seed() {
  await db.sync({ force: true });
  console.log(green('Database synchronization complete.'));

  const tests = await Promise.all([
    Test.create({
      count: 1,
      name: 'Test 1',
    }),
    Test.create({
      count: 2,
      name: 'Test 2',
    }),
    Test.create({
      count: 3,
      name: 'Test 3',
    }),
    Test.create({
      count: 4,
      name: 'Test 4',
    }),
  ]);

  console.log(green(`Seeding complete.`));
}

async function runSeed() {
  console.log('Seeding...');
  try {
    await seed();
  } catch (err) {
    console.log(red('Error seeding database!'));
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log(yellow('Closing database connection...'));
    await db.close();
    console.log(green('Database connection closed.'));
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
