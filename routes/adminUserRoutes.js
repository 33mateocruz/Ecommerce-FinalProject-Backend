const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/adminUserController.js");
const authMiddleware = require("../middlewares/authMiddleware");
const { expressjwt: checkJwt } = require("express-jwt");

router.post(
  "/",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  AdminController.store,
);
router.get("/", AdminController.index);
router.get("/:id", AdminController.show);
router.put("/:id", AdminController.update);
router.delete("/:id", AdminController.destroy);

module.exports = router;
