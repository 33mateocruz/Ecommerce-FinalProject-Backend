const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", productController.index);
router.get("/:id", productController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  productController.store,
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  productController.update,
);

router.delete(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  productController.destroy,
);

module.exports = router;
