const selectVestModels = require("../models/selectVestModels");

async function selectView(req, res) {
  try {
    const vestibular = req.query.vestibular;
    const tema = req.query.tema;
    const nomeT1 = req.query.nometa;
    const nomeT2 = req.query.nometb;
    const nomeT3 = req.query.nometc;
    const relevancia = req.query.rel;

    if (
      !vestibular ||
      !tema ||
      !nomeT1 ||
      !nomeT2 ||
      !nomeT3 ||
      !relevancia === null
    ) {
      res.status(404).json({
        message: "Todos os parametros devem estar corretos",
      });
    }

    const selectViewResult = await selectVestModels.selectView(
      vestibular,
      tema,
      nomeT1,
      nomeT2,
      nomeT3,
      relevancia,
    );

    if (selectViewResult) {
      res.status(200).json(selectVestModels);
    }
  } catch (erro) {
    res.status(500).json({
      message: "Não foi possível buscar pelas informações",
    });
  }
}

module.exports = { selectView };
