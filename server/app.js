const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', (req, res, next) => {
  res.send('index.html');
});

app.listen(PORT, () => {
  console.log('Application is listening on port', PORT);
});
