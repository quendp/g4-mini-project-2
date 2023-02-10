const express = require("express");
const { RegistrationController } = require("../controllers/registration.controllers");
const router = express.Router();

router.post("/", RegistrationController.registerUser);

module.exports = router;