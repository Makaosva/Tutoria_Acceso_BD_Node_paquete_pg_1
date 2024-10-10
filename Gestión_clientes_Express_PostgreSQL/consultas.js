const { pool } = require("./connection");

const getDate = async () => {
  const result = await pool.query("SELECT NOW()");
  // console.log(result);
};
getDate();

const agregarCliente = async (nombre, email) => {
  const consulta = "INSERT INTO clientes values (DEFAULT, $1, $2)";
  const values = [nombre, email];
  const result = await pool.query(consulta, values);
  // console.log("Cliente agregado");
};

// agregarCliente("nombre1", "correo1@email.com");

const obtenerClientes = async () => {
  const { rows } = await pool.query("SELECT * FROM clientes");
  // console.log(rows);
  return rows;
};

module.exports = { agregarCliente, obtenerClientes };
