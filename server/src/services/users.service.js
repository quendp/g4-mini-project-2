const { user } = require("../../models");

class UsersService {
  static async createUser({
    username,
    firstname,
    lastname,
    email,
    phone_number,
    age,
    address,
    password,
  }) {
    try {
      const newUser = await user.create({
        username,
        firstname,
        lastname,
        email,
        phone_number,
        age,
        address,
        password,
      });
      return newUser;
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }

  static async getAllUsers() {
    try {
      return user.findAll();
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getUserById(id) {
    try {
      return user.findOne({ where: { id } });
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async updateUserById(
    id,
    {
      username,
      firstname,
      lastname,
      email,
      phone_number,
      age,
      address,
      password,
    }
  ) {
    try {
      const userToUpdate = await user.findOne({ where: { id } });
      if (userToUpdate) {
        userToUpdate.username = username;
        userToUpdate.firstname = firstname;
        userToUpdate.lastname = lastname;
        userToUpdate.email = email;
        userToUpdate.phone_number = phone_number;
        userToUpdate.age = age;
        userToUpdate.address = address;
        userToUpdate.password = password;
        await userToUpdate.save();
        return userToUpdate;
      }
      return null;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async deleteUserById(id) {
    try {
      const userToDelete = await user.findOne({ where: { id } });
      if (userToDelete) {
        await userToDelete.destroy();
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }
}

module.exports = { UsersService };
