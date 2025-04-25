const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminUser.controller");

router.post("/", controller.create);
router.get("/", controller.list);
router.get("/:id", controller.getOne);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
