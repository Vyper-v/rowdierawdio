import express from "express";

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

const numeros = [];

route.post("/number", (req, res) => {
  const number = req.body.number;
  numeros.push(number);
  res.send(number.toString());
});

route.get("/number", (req, res) => {
  res.json(numeros);
});

route.get("/number/:index", (req, res) => {
  const index = Number(req.params.index);
  if (index < 0 || index >= numeros.length) {
    return res.status(400).send("Indice no valido");
  }

  res.send(numeros[index].toString());
});

route.get("/randomdata", (req, res) => {
  res.setHeader("Content-Type", "plain/text");
  res.send(`${Math.random()}`);
});

export default route;
