const { CompanionsService } = require("../services/companions.service");

class CompanionsController {
  static async createCompanion(req, res) {
    try {
      const {
        firstname,
        lastname,
        age,
        bookingId
      } = req.body;
      const companion = await CompanionsService.createCompanion({
        firstname,
        lastname,
        age,
        bookingId
      });
      res.json(companion);
    } catch (e) {
      res.status(400).json({ message: "Error creating companion" });
    }
  }

  static async getAllCompanions(_req, res) {
    try {
      const companions = await CompanionsService.getAllCompanions();
      res.json(companions);
    } catch (e) {
      res.status(404).json({ message: "Companions not Found" });
    }
  }

  static async getCompanionById(req, res) {
    try {
      const { id } = req.params;
      const companion = await CompanionsService.getCompanionById(id);
      res.json(companion);
    } catch (e) {
      res.status(404).json({ message: "Companion not Found" });
    }
  }

  static async updateCompanionById(req, res) {
    try {
      const { id } = req.params;
      const {
        firstname,
        lastname,
        age,
      } = req.body;
      const companion = await CompanionsService.updateCompanionById(id, {
        firstname,
        lastname,
        age,
      });
      res.json(companion);
    } catch (e) {
      res.status(404).json({ message: "Companion not Found" });
    }
  }

  static async deleteCompanionById(req, res) {
    try {
      const { id } = req.params;
      const companion = await CompanionsService.deleteCompanionById(id);
      res.json(companion);
    } catch (e) {
      res.status(404).json({ message: "Companion not Found" });
    }
  }
}

module.exports = { CompanionsController };