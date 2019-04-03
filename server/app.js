const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const db = require('./db');
const PORT = 3000;

const createApp = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(volleyball);

  app.use('/api', require('./api'));

  app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });

  // Error handler
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.send(err.status || 500).send(err.message || 'Internal Server Error.');
  });
};

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  app.listen(PORT, () => {
    console.log('Application is listening on port', PORT);
  });
};

const syncDb = () => db.sync().then(() => console.log('Database synced!'));

async function bootApp() {
  await syncDb();
  await createApp();
  await startListening();
}

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js')
// It will evaluate false when this module is required by another module:
// for example, if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp();
} else {
  createApp();
}
