const pool = require("../config/database");

async function listarTudo() {
  const sql = "SELECT * FROM por_vestibular";
  const result = await pool.query(sql);
  return result.rows;
}

module.exports = { listarTudo };
