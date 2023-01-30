const { Companions } = require("../../models");

class CompanionsService {
  static async createCompanion({
    firstname,
    lastname,
    age,
    bookingId
  }) {
    try {
      const newCompanion = await Companions.create({
        firstname,
        lastname,
        age,
        bookingId
      });
      return newCompanion;
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }

  static async getAllCompanions() {
    try {
      return Companions.findAll();
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getCompanionById(id) {
    try {
      return Companions.findOne({ where: { id }});
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async updateCompanionById(
    id,
    {
        firstname,
        lastname,
        age,
    }
  ) {
    try {
      const companionToUpdate = await Companions.findOne({ where: { id } });
      if (companionToUpdate) {
        companionToUpdate.firstname = firstname;
        companionToUpdate.lastname = lastname;
        companionToUpdate.age = age;
        await companionToUpdate.save();
        return companionToUpdate;
      }
      return null;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async deleteCompanionById(id) {
    try {
      const companionToDelete = await Companions.findOne({ where: { id } });
      if (companionToDelete) {
        await companionToDelete.destroy();
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }
}

module.exports = { CompanionsService };
