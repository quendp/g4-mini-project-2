const { Package } = require("../../models");

class PackageService {
  static async createPackage({
    package_type,
    destination,
    flight_class,
    transportation,
    accommodation,
    activities,
    starting_price,
  }) {
    try {
      const packageToCreate = await Package.create({
        package_type,
        destination,
        flight_class,
        transportation,
        accommodation,
        activities,
        starting_price,
      });
      return packageToCreate;
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }

  static async getAllPackage() {
    try {
      return Package.findAll();
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getPackageById(id) {
    try {
      return Package.findOne({ where: { id }});
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async updatePackageById(
    id,
    {
        package_type,
        destination,
        flight_class,
        transportation,
        accommodation,
        activities,
        starting_price,
    }
  ) {
    try {
      const packageToUpdate = await Package.findOne({ where: { id } });
      if (packageToUpdate) {
        packageToUpdate.package_type = package_type;
        packageToUpdate.destination = destination;
        packageToUpdate.flight_class = flight_class;
        packageToUpdate.transportation = transportation;
        packageToUpdate.accommodation = accommodation;
        packageToUpdate.activities = activities;
        packageToUpdate.starting_price = starting_price;
        await packageToUpdate.save();
        return packageToUpdate;
      }
      return null;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async deletePackageById(id) {
    try {
      const packageToDelete = await Package.findOne({ where: { id } });
      if (packageToDelete) {
        await packageToDelete.destroy();
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }
}

module.exports = { PackageService };
