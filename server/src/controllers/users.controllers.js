const { UsersService } = require("../services/users.service");

class UsersController {
  static async persistUser(req, res) {
    try {
      const { token } = req.body;
      const accessData = await UsersService.persistUser({ token });
      res.json(accessData);
    } catch (err) {
      res.status(400).json({ message: "Error logging in. Try again later." });
    }
  }

  static async registerUser(req, res) {
    try {
      const {
        username,
        firstname,
        lastname,
        email,
        phone_number,
        age,
        address,
        password,
      } = req.body;
      const { roleId } = req.params;
      const accessData = await UsersService.registerUser({
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
      res.json(accessData);
    } catch (e) {
      res.status(400).json({ message: "Error creating user" });
    }
  }

  static async loginUser(req, res) {
    try {
      const { usernameOrEmail, password } = req.body;
      const accessData = await UsersService.loginUser({
        usernameOrEmail,
        password,
      });
      res.json(accessData);
    } catch (e) {
      res.status(400).json({ message: "Error logging in. Try again later." });
    }
  }

  static async logoutUser(req, res) {
    res.json({ token: false, username: "login", role: 0 });
    res.status(204);
  }

  static async getUser(req, res) {
    try {
      const { username } = req.params;
      const user = await UsersService.getUser(username);
      if (user.username) user.password = "********";
      res.json(user);
    } catch (e) {
      res.status(404).json({ message: "User not Found" });
    }
  }

  static async updateUser(req, res) {
    try {
      const { roleId, username } = req.params;
      const fieldsToUpdate = req.body;
      const user = await UsersService.updateUser(
        roleId,
        username,
        fieldsToUpdate
      );
      user
        ? res.json(user)
        : res.status(404).json({ message: "User not found." });
    } catch (e) {
      res
        .status(400)
        .json({ message: "An error occured. Cannot update user." });
    }
  }

  static async getAgent(req, res) {
    try {
      const { agentName } = req.params;
      const agent = await UsersService.getAgent(agentName);
      if (agent.username) agent.password = "********";
      res.json(agent);
    } catch (err) {
      res.status(404).json({ message: "Agent not Found" });
    }
  }

  // for tesing purposes only
  static async createUser(req, res) {
    try {
      const {
        username,
        firstname,
        lastname,
        email,
        phone_number,
        age,
        address,
        password,
      } = req.body;
      const user = await UsersService.createUser({
        username,
        firstname,
        lastname,
        email,
        phone_number,
        age,
        address,
        password,
      });
      res.json(user);
    } catch (e) {
      res.status(400).json({ message: "Error creating user" });
    }
  }

  static async getAllUsers(_req, res) {
    try {
      const users = await UsersService.getAllUsers();
      res.json(users);
    } catch (e) {
      res.status(404).json({ message: "Users not Found" });
    }
  }

  static async updateUserById(req, res) {
    try {
      const { id } = req.params;
      const {
        username,
        firstname,
        lastname,
        email,
        phone_number,
        age,
        address,
        password,
      } = req.body;
      const user = await UsersService.updateUserById(id, {
        username,
        firstname,
        lastname,
        email,
        phone_number,
        age,
        address,
        password,
      });
      res.json(user);
    } catch (e) {
      res.status(404).json({ message: "User not Found" });
    }
  }

  static async deleteUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UsersService.deleteUserById(id);
      res.json(user);
    } catch (e) {
      res.status(404).json({ message: "User not Found" });
    }
  }
}

module.exports = { UsersController };
