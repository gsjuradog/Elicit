const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router');

const Port = 3004;
const hostname = '127.0.0.1';

app.use(cors());
app.use(express.json());

app.use(morgan('dev'));
app.use(router);

app.listen(Port, console.log(`Server working at http://${hostname}:${Port}`)); // eslint-disable-line no-console
