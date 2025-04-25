const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");

router.get("/", orderController.index);
router.post("/", orderController.store);
router.get("/:id", orderController.show);
router.patch("/:id", orderController.update);
router.delete("/:id", orderController.destroy);

module.exports = router;
