const { Pool } = require("pg");

/* En la terminal
CREATE DATABASE gestion_de_usuarios;
\c gestion_de_usuarios;
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    edad INT NOT NULL,
    pais VARCHAR(50) NOT NULL);
*/

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "mo76492250",
  database: "gestion_de_usuarios",
  allowExitOnIdle: true,
});

const agregarUsuario = async (nombre, apellido, edad, pais) => {
  const consulta = "INSERT INTO usuarios (nombre, apellido, edad, pais) VALUES ($1, $2, $3, $4)";

  const values = [nombre, apellido, edad, pais];
  const result = await pool.query(consulta, values);

  console.log("Usuario agregado", result.rowCount);
};

const obtenerUsuario = async () => {
  const result = await pool.query("SELECT * FROM usuarios");

  console.log(result.rows);
  return result.rows;
};

module.exports = { agregarUsuario, obtenerUsuario };
