const { PackageService } = require("../services/packages.service");

class PackageController {
  static async createPackage(req, res) {
    try {
      const {
        package_type,
        destination,
        flight_class,
        transportation,
        accommodation,
        activities,
        starting_price,
      } = req.body;
      const newPackage = await PackageService.createPackage({
        package_type,
        destination,
        flight_class,
        transportation,
        accommodation,
        activities,
        starting_price,
      });
      res.json(newPackage);
    } catch (e) {
      res.status(400).json({ message: "Error creating package" });
    }
  }

  static async getAllPackage(_req, res) {
    try {
      const packages = await PackageService.getAllPackage();
      res.json(packages);
    } catch (e) {
      res.status(404).json({ message: "Packages not Found" });
    }
  }

  static async getPackageById(req, res) {
    try {
      const { id } = req.params;
      const packageToGet = await PackageService.getPackageById(id);
      res.json(packageToGet);
    } catch (e) {
      res.status(404).json({ message: "package not Found" });
    }
  }

  static async updatePackageById(req, res) {
    try {
      const { id } = req.params;
      const {
        package_type,
        destination,
        flight_class,
        transportation,
        accommodation,
        activities,
        starting_price,
      } = req.body;
      const packageToUpdate = await PackageService.updatePackageById(id, {
        package_type,
        destination,
        flight_class,
        transportation,
        accommodation,
        activities,
        starting_price,
      });
      res.json(packageToUpdate);
    } catch (e) {
      res.status(404).json({ message: "Package not Found" });
    }
  }

  static async deletePackageById(req, res) {
    try {
      const { id } = req.params;
      const packageToDelete = await PackageService.deletePackageById(id);
      res.json(packageToDelete);
    } catch (e) {
      res.status(404).json({ message: "Package not Found" });
    }
  }
}

module.exports = { PackageController };