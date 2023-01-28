const express = require("express");
const { AgentsController } = require("../controllers/agents.controllers");
const router = express.Router();

router.post("/", AgentsController.createAgent);
router.get("/", AgentsController.getAllAgents);
router.get("/:id", AgentsController.getAgentById);
router.put("/:id", AgentsController.updateAgentById);
router.delete("/:id", AgentsController.deleteAgentById);

module.exports = router;