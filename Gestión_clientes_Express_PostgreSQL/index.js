const express = require("express");
const app = express();

app.use(express.json());

const { agregarCliente, obtenerClientes } = require("./consultas");

app.listen(3000, console.log("¡Servidor encendido!"));

app.get("/clientes", async (req, res) => {
  const clientes = await obtenerClientes();
  res.json(clientes);
});

//Post Clientes
app.post("/clientes", async (req, res) => {
  const { nombre, email } = req.body;
  await agregarCliente(nombre, email);
  res.send("Cliente generado correctamente");
});
