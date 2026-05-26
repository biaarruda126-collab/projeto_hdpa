require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
});

pool.connect((erro, client, release) => {
  if (erro) {
    console.error("Erro ao conectar com o banco de dados PostGreSQL", erro);
  } else {
    console.log("Conectado ao banco de dados PostGreSQL ✅");
    release();
  }
});

module.exports = pool;
