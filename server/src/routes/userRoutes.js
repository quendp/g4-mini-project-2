const express = require("express");
const { UsersController } = require("../controllers/users.controllers");
const router = express.Router();

router.post("/", UsersController.createUser);

module.exports = router;