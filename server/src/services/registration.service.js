const { User } = require("../../models");

class RegistrationService {
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
}

module.exports = { RegistrationService };
