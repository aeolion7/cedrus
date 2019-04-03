const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const PORT = 3000;

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

app.listen(PORT, () => {
  console.log('Application is listening on port', PORT);
});
