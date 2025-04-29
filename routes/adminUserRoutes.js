const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/adminUserController");

router.post("/", AdminController.create);
router.get("/", AdminController.list);
router.get("/:id", AdminController.getOne);
router.put("/:id", AdminController.update);
router.delete("/:id", AdminController.remove);

module.exports = router;
