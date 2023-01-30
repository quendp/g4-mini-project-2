const express = require("express");
const { CompanionsController } = require("../controllers/companions.controllers");
const router = express.Router();

router.post("/", CompanionsController.createCompanion);
router.get("/", CompanionsController.getAllCompanions);
router.get("/:id", CompanionsController.getCompanionById);
router.put("/:id", CompanionsController.updateCompanionById);
router.delete("/:id", CompanionsController.deleteCompanionById);

module.exports = router;