const { Packages } = require("../../models");

class PackageService {
  static async getAllPackage() {
    try {
      return Packages.findAll();
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }
}

module.exports = { PackageService };
