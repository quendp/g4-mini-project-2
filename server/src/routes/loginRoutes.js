const express = require("express");
const { LoginController } = require("../controllers/login.controllers");
const router = express.Router();

router.post("/", LoginController.loginUser);

module.exports = router;