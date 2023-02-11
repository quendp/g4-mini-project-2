const { User } = require("../../models");

class UsersService {

  static async registerUser({
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
      // check if username already exists
      const usernameExists = await User.findOne({where: {username}})
      if(usernameExists){
        return {message: "Username is already taken."}
      }
      // check if email already exists
      const emailExists = await User.findOne({where: {email}})
      if(emailExists){
        return {message: "Email address already have an account."}
      }
      // create user
      const newUser = await User.create({
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
      console.log("Registration failed: ", err);
    }
  }

  static async loginUser({
    username,
    email,
    password,
  }) {
    try {
      // check if username already exists
      const usernameExists = await User.findOne({where: {username}})
      if(usernameExists){
        return {message: "Username already exists"}
      }
      // check if email already exists
      const emailExists = await User.findOne({where: {email}})
      if(emailExists){
        return {message: "Email already exists"}
      }
      // create user
      const newUser = await User.create({
        username,
        email,
        password,
      });
      return newUser;
    } catch (err) {
      console.log("Registration failed: ", err);
    }
  }

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
      const newUser = await User.create({
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
      return User.findAll({ include: "Booking" });
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getUserById(id) {
    try {
      return User.findOne({ where: { id },  include: "Booking"  });
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
      const userToUpdate = await User.findOne({ where: { id } });
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
      const userToDelete = await User.findOne({ where: { id } });
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
