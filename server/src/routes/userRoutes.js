const express = require("express");
const { UsersController } = require("../controllers/users.controllers");
const router = express.Router();

router.post("/", UsersController.createUser);
router.get("/", UsersController.getAllUsers);
router.get("/:id", UsersController.getUserById);
router.put("/:id", UsersController.updateUserById);
router.delete("/:id", UsersController.deleteUserById);

router.post("/register", UsersController.registerUser);
router.post("/login", UsersController.loginUser);

module.exports = router;