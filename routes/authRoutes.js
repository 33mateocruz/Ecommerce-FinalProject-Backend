const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");

router.post("/", authController.logIn);

module.exports = router;
