const db = require('./db');
const { Tool, User } = require('./db/models/index');
const { green, yellow, red } = require('chalk');

async function seed() {
  await db.sync({ force: true });
  console.log(green('Database synchronization complete.'));

  const users = await Promise.all([
    User.create({
      id: 1,
      email: 'john2275@email.net',
      password: 'ilovetools76',
      rating: 4.2,
      location: 'New York City',
      radiusInMiles: 5,
    }),

    User.create({
      id: 2,
      email: 'jimbobtoolguy@tools.com',
      password: 'hammerwrench',
      rating: 3.6,
      location: 'Cornville, Iowa',
      radiusInMiles: 25,
    }),

    User.create({
      id: 3,
      email: 'mike1234@gmail.com',
      password: 'emptyshed',
      rating: 2.4,
      location: 'Rural City, Pennsylvania',
      radiusInMiles: 15,
    }),
  ]);

  const tools = await Promise.all([
    Tool.create({
      id: 1,
      name: 'Shovel',
      status: 'open',
      pictureUrl:
        'https://images.homedepot-static.com/productImages/ead1895a-7772-4424-bd73-0856a18c7605/svn/hdx-shovels-2531800-64_1000.jpg',
      description: 'A shovel! You can use it to dig holes.',
      features: ['sturdy', 'metal'],
      loanDuration: 0,
      userId: 2,
    }),

    Tool.create({
      id: 2,
      name: 'Hammer',
      status: 'shared',
      pictureUrl:
        'https://images.homedepot-static.com/productImages/f1e59730-23fb-4660-ad22-61fef380589a/svn/tekton-claw-hammers-30303-64_1000.jpg',
      description:
        'A fine hammer! You can use it to hit stuff! Nails sold separately.',
      features: ['sturdy', 'magnetic'],
      loanDuration: 5,
      userId: 1,
      loanedUserId: 3,
    }),

    Tool.create({
      id: 3,
      name: 'Drill',
      status: 'shared',
      pictureUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61Dc8x4DTiL._SL1000_.jpg',
      description:
        'This drill will make hanging up your new picture frame quick and easy!',
      features: ['electronic', 'name-brand'],
      loanDuration: 12,
      userId: 3,
      loanedUserId: 2,
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
