const express = require('express');

const server = express();
const filmes = require('./src/data/filmes.json')


server.get('/filmes',(req, res) => {
    return res.json(filmes)
});

server.listen(8080, () => {
  console.log('servidor está funcionando...')
});