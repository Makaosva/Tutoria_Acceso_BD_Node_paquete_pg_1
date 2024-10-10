const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "",
  database: "gestion_clientes",
  allowExitOnIdle: true,
});

module.exports = { pool };
