const pool = require("../config/database");

async function selectView(
  vestibular,
  tema,
  nomeT1,
  nomeT2,
  nomeT3,
  relevancia,
) {
  const sql = `SELECT * FROM por_vestibular WHERE nome_do_vestibular = $1
    and (nome_do_tema = $2) and (nome_topico = $3 or nome_topico = $4 or nome_topico = $5)
    and (relevancia_da_questao = $6)`;
  const result = await pool.query(sql, [
    vestibular,
    tema,
    nomeT1,
    nomeT2,
    nomeT3,
    relevancia,
  ]);

  return result.rows;
}

module.exports = { selectView };
