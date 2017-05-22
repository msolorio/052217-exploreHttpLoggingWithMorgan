'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

// EXPLORING DIFFERENT HTTP LOGGING FORMATS WITH MORGAN
// app.use(morgan('common'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// app.use(morgan(function (tokens, req, res) {
//   return [
//     tokens.method(req, res),
//     tokens.url(req, res),
//     tokens.status(req, res),
//     tokens.res(req, res, 'content-length'), '-',
//     tokens['response-time'](req, res), 'ms'
//   ].join(' ');
// }));

app.get('*', (request, response) => {
  response.send('this is the response');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
