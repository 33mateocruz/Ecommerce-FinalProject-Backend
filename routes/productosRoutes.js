const express = require("express");
const router = express.Router();
const productController = require("../controllers/productosController");

router.get("/", productController.index);
router.get("/:id", productController.show);
router.post("/", productController.store);
router.patch("/:id", productController.update);
router.delete("/:id", productController.destroy);

module.exports = router;
