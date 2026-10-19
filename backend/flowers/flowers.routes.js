const express = require("express");
const router = express.Router();
const controller = require("./flowers.controller");

router.get("/", controller.getFlowers);
router.post("/", controller.addFlower);
router.put("/:id", controller.updateFlower);
router.delete("/:id", controller.deleteFlower);

module.exports = router;
