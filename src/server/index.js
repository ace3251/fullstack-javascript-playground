const express = require('express');
const os = require('os');
const request = require('request');

const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => {
  request.get({
    url: 'https://jsonplaceholder.typicode.com/todos',
    json: true,
  }, (error, response, body) => {
    res.send({
      todos: body.slice(0,10)
    });
  })
});

app.listen(8080, () => console.log('Listening on port 8080!'));
