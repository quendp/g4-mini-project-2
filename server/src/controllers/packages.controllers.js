const { PackageService } = require("../services/packages.service");

class PackageController {
  static async getAllPackage(_req, res) {
    try {
      const packages = await PackageService.getAllPackage();
      res.json(packages);
    } catch (e) {
      res.status(404).json({ message: "Packages not Found" });
    }
  }
}

module.exports = { PackageController };
