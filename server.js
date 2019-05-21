/* server.js main file */
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('req = \n', req);
  res.send('Test CI with Travis');
});

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('app running on port = ', PORT);
});

// eslint-disable-next-line no-console
console.log('server = ', server);

module.exports = server;
