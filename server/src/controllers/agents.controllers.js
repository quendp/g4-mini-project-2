const { AgentsService } = require("../services/agents.service");

class AgentsController {
  static async createAgent(req, res) {
    try {
      const {
        firstname,
        lastname,
        email,
        phone_number,
        password,
      } = req.body;
      const agent = await AgentsService.createAgent({
        firstname,
        lastname,
        email,
        phone_number,
        password,
      });
      res.json(agent);
    } catch (e) {
      res.status(400).json({ message: "Error creating agent" });
    }
  }

  static async getAllAgents(_req, res) {
    try {
      const agents = await AgentsService.getAllAgents();
      res.json(agents);
    } catch (e) {
      res.status(404).json({ message: "Agents not Found" });
    }
  }

  static async getAgentById(req, res) {
    try {
      const { id } = req.params;
      const agent = await AgentsService.getAgentById(id);
      res.json(agent);
    } catch (e) {
      res.status(404).json({ message: "Agent not Found" });
    }
  }

  static async updateAgentById(req, res) {
    try {
      const { id } = req.params;
      const {
        firstname,
        lastname,
        email,
        phone_number,
        password,
      } = req.body;
      const agent = await AgentsService.updateAgentById(id, {
        firstname,
        lastname,
        email,
        phone_number,
        password,
      });
      res.json(agent);
    } catch (e) {
      res.status(404).json({ message: "Agent not Found" });
    }
  }

  static async deleteAgentById(req, res) {
    try {
      const { id } = req.params;
      const agent = await AgentsService.deleteAgentById(id);
      res.json(agent);
    } catch (e) {
      res.status(404).json({ message: "Agent not Found" });
    }
  }
}

module.exports = { AgentsController };