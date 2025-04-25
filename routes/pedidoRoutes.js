const express = require("express");
const router = express.Router();
const pedidosController = require("../controllers/pedidosController");

router.get("/", pedidosController.index);
router.post("/", pedidosController.store);
router.get("/:id", pedidosController.show);
router.patch("/:id", pedidosController.update);
router.delete("/:id", pedidosController.destroy);

module.exports = router;
