const porVestModels = require("../models/por_vestModels");

async function listarTudo(req, res) {
  try {
    const resultados = await porVestModels.listarTudo();
    if (resultados) {
      res.status(200).json(resultados);
    }
  } catch (erro) {
    res.status(500).json({
      message: "Erro ao listar a view !",
      erro: erro.message,
    });
  }
}

module.exports = { listarTudo };
