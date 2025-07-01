const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController.js");

router.get("/", categoriesController.index);
router.get("/:id", categoriesController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  categoriesController.store,
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  categoriesController.update,
);

router.delete(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  categoriesController.destroy,
);

module.exports = router;
