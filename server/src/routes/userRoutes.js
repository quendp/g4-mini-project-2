const express = require("express");
const { UsersController } = require("../controllers/users.controllers");
const router = express.Router();
const passport = require("passport");

// Routers for testing purposes
router.post("/", UsersController.createUser);
router.get("/", UsersController.getAllUsers);
router.put("/:id", UsersController.updateUserById);
router.delete("/:id", UsersController.deleteUserById);

// Routers for user access
router.post("/register/:roleId", UsersController.registerUser);
router.post("/login", UsersController.loginUser);
router.post("/logout", UsersController.logoutUser);

// Routers for users
router.post(
  "/persist",
  passport.authenticate("jwt", { session: false }),
  UsersController.persistUser
);
router.get(
  "/:username",
  passport.authenticate("jwt", { session: false }),
  UsersController.getUser
);
router.put(
  "/update/:roleId/:username",
  passport.authenticate("jwt", { session: false }),
  UsersController.updateUser
);

// Routers for agents
router.get(
  "/agent/:agentName",
  passport.authenticate("jwt", { session: false }),
  UsersController.getAgent
);

module.exports = router;
