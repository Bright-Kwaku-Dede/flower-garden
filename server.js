const express = require("express");
const cors = require("cors");
const flowersRoutes = require("./backend/flowers/flowers.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/flowers", flowersRoutes);

app.listen(8001, () => {
  console.log("Flower Garden backend running on http://localhost:8001");
});
