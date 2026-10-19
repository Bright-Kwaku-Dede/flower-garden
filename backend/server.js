const express = require("express");
const cors = require("cors");
const flowersRoutes = require("./flowers/flowers.routes");
const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/flowers", flowersRoutes);

app.listen(8001, () => {
  console.log("Flower Garden backend running on http://localhost:8001");
});

router.get("/", (req, res) => {
  res.json({ message: "Flowers API is working!" });
});

module.exports = router;
