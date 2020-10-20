const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

app.get('/url-shortener', (req, res) => {
  res.send({ url: 'shortener' });
});

let port = process.env.PORT;
if (!port || port === '') {
  port = 3000;
}
app.listen(port);
