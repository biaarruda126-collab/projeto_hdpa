const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const porVestRoutes = require("./src/routes/por_vestRoutes");
const selectView = require('./src/routes/selectViewRoutes');

app.use("/porVest", porVestRoutes);
app.use("/selectView", porVestRoutes);

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em: http://localhost:${port}/`);
  console.log(`🚀 Rota para o select da view: http://localhost:${port}/selectView?vestibular=PUC&tema=Literatura&nomeTa=Barroco&nomeTb=Arcadismo&nomeTc=Regência`);
});
