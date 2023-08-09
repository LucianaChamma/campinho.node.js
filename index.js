const express = require("express");

const server = express();
const filmes = require("./src/data/filmes.json");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

server.use(cors(corsOptions));
server.get("/filmes", (req, res) => {
  return res.json(filmes);
});

server.listen(8080, () => {
  console.log("servidor está funcionando...");
});
