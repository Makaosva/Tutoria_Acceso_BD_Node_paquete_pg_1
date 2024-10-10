const express = require("express");
const { agregarUsuario, obtenerUsuario } = require("./consultas");
const app = express();

app.use(express.json());

app.get("/usuarios", async (req, res) => {
  const usuarios = await obtenerUsuario();
  res.json(usuarios);
});

app.post("/usuarios", async (req, res) => {
  const { nombre, apellido, edad, pais } = req.body;
  await agregarUsuario(nombre, apellido, edad, pais);
  res.send("Usuario agregado con éxito!!!");
});

app.listen(3002, () => console.log("Servidor levantado en el puerto 3002"));
