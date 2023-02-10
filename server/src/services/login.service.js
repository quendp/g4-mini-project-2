const { User } = require("../../models");
const jwt = require('jsonwebtoken');

class LoginService {
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
}

module.exports = { LoginService };
