const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

app.get('/url-shortener', (req, res) => {
  res.send({ url: 'shortener' });
});

app.listen(3000);
