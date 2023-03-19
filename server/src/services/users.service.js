const { Users, Bookings, Companions } = require("../../models");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secrets");

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
        roleId: 1,
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
          id: accountExists.id,
          email: accountExists.email,
        },
        jwtSecret
      );
      return {
        token: jwtToken,
        username: accountExists.username,
        role: accountExists.roleId,
      };
    } catch (err) {
      console.log("Registration failed: ", err);
      return { message: "Error logging in. Try again later." };
    }
  }

  static async getUserByUsername(username) {
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

  static async updateAgent(agentName, fieldsToUpdate) {
    try {
      const agentToUpdate = await Users.findOne({
        where: { username: agentName },
      });
      if (agentToUpdate && agentToUpdate.roleId === 2) {
        const fields = Object.keys(fieldsToUpdate);
        fields.forEach((field) => {
          agentToUpdate[field] = fieldsToUpdate[field];
        });
        await agentToUpdate.save();
        return agentToUpdate;
      }
      return null;
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
      });

      const agentData = { agent: agent, assignedBookings: bookings };
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
