const {
  Users,
  Bookings,
  Companions,
  Packages,
  Payments,
} = require("../../models");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secrets");
const jwt_decode = require("jwt-decode");

class UsersService {
  static async persistUser({ token }) {
    try {
      const payload = jwt_decode(token);

      // check if username roleId exists and matches
      const accountExists = await Users.findOne({
        where: {
          [Op.and]: [
            { username: payload.username },
            { roleId: payload.roleId },
          ],
        },
      });
      if (!accountExists) {
        return null;
      }

      //replace old token with new token
      const jwtToken = jwt.sign(
        {
          username: accountExists.username,
          roleId: accountExists.roleId,
        },
        jwtSecret,
        { expiresIn: "7d" }
      );

      return {
        token: jwtToken,
        username: accountExists.username,
        role: accountExists.roleId,
      };
    } catch (err) {
      console.log("Login failed: ", err);
      return null;
    }
  }

  static async registerUser({
    roleId,
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
      const usernameExists = await Users.findOne({ where: { username } });
      if (usernameExists) {
        return { message: "Username is already taken." };
      }
      // check if email already exists
      const emailExists = await Users.findOne({ where: { email } });
      if (emailExists) {
        return { message: "Email address already have an account." };
      }
      // create user
      const newUser = await Users.create({
        roleId,
        username,
        firstname,
        lastname,
        email,
        phone_number,
        age,
        address,
        password,
      });

      const createdUser = await Users.findOne({
        where: { username: newUser.username },
      });
      if (!createdUser) {
        return { message: "Failed to create user." };
      }
      const jwtToken = jwt.sign(
        {
          username: createdUser.username,
          roleId: createdUser.roleId,
        },
        jwtSecret,
        { expiresIn: "7d" }
      );
      return {
        token: jwtToken,
        username: createdUser.username,
        role: createdUser.roleId,
      };
    } catch (err) {
      console.log("Registration failed: ", err);
      return { message: "Registration failed. Try again later." };
    }
  }

  static async loginUser({ usernameOrEmail, password }) {
    try {
      // check if username or email exists
      const accountExists = await Users.findOne({
        where: {
          [Op.or]: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
        },
      });
      if (!accountExists) {
        return { message: "Email or username does not match an account." };
      }
      // check if password matches the account found
      if (accountExists.password !== password) {
        return { message: "Incorrect password" };
      }
      const jwtToken = jwt.sign(
        {
          username: accountExists.username,
          roleId: accountExists.roleId,
        },
        jwtSecret,
        { expiresIn: "7d" }
      );
      return {
        token: jwtToken,
        username: accountExists.username,
        role: accountExists.roleId,
      };
    } catch (err) {
      console.log("Login failed: ", err);
      return { message: "Error logging in. Try again later." };
    }
  }

  static async getUser(username) {
    try {
      const currentUser = await Users.findOne({
        where: {
          [Op.and]: [{ username }, { roleId: 1 }],
        },
        include: [
          {
            model: Bookings,
            as: "Bookings",
            include: [
              {
                model: Companions,
                as: "Companions",
              },
              {
                model: Users,
                as: "Agent",
                attributes: ["firstname", "lastname", "email"],
              },
              {
                model: Packages,
                as: "Packages",
              },
              {
                model: Payments,
                as: "Payments",
              },
            ],
          },
        ],
      });
      return currentUser ? currentUser : { message: "User does not exist." };
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async updateUser(roleId, username, fieldsToUpdate) {
    try {
      // check if the api call is from a valid user
      const userToUpdate = await Users.findOne({
        where: {
          [Op.and]: [{ username: username }, { roleId: roleId }],
        },
      });

      if (!userToUpdate) {
        return { message: "Cannot change information. Try again later." };
      }

      // Check if username already exists
      if (fieldsToUpdate.username) {
        const verifyUsername = await Users.findOne({
          where: { username: fieldsToUpdate.username },
        });
        if (verifyUsername) {
          {
            return { message: "Username is taken." };
          }
        }
      }

      // Check if email already exists
      if (fieldsToUpdate.email) {
        const verifyEmail = await Users.findOne({
          where: { email: fieldsToUpdate.email },
        });
        if (verifyEmail) {
          {
            return { message: "Email is taken." };
          }
        }
      }

      // loop through the object to save the information
      const fields = Object.keys(fieldsToUpdate);
      fields.forEach((field) => {
        userToUpdate[field] = fieldsToUpdate[field];
      });
      await userToUpdate.save();
      return userToUpdate;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getAgent(agentName) {
    try {
      const agent = await Users.findOne({
        where: {
          [Op.and]: [{ username: agentName }, { roleId: 2 }],
        },
      });

      const bookings = await Bookings.findAll({
        where: {
          agentId: agent.id,
        },
        include: [
          {
            model: Companions,
            as: "Companions",
          },
          {
            model: Packages,
            as: "Packages",
          },
          {
            model: Payments,
            as: "Payments",
          },
          {
            model: Users,
            as: "Users",
          },
        ],
      });

      const agentData = { ...agent.dataValues, Bookings: bookings };
      return agent ? agentData : { message: "Agent does not exist." };
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  // for testing purposes only
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
      const newUser = await Users.create({
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
      return Users.findAll({ include: "Bookings" });
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
      const userToUpdate = await Users.findOne({ where: { id } });
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
      const userToDelete = await Users.findOne({ where: { id } });
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
