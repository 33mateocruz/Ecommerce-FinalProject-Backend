const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController.js");

router.use(authMiddleware);

router.get("/", categoriesController.index);
router.get("/:id", categoriesController.show);
router.post("/", categoriesController.store);
router.patch("/:id", categoriesController.update);
router.delete("/:id", categoriesController.destroy);

module.exports = router;
