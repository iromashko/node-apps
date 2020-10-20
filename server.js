const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/url-shortener', (req, res) => {
  res.send({ url: 'shortener' });
});

let port = process.env.PORT;
if (!port || port === '') {
  port = 3000;
}
app.listen(port);
