const { UsersService } = require("../services/users.service");

class UsersController {
    static async createUser(req, res) {
        try {
          const { username, firstname, lastname, email, phone_number, age, address, password } = req.body;
          const user = await UsersService.createUser({ username, firstname, lastname, email, phone_number, age, address, password });
          res.json(user);
        } catch (e) {
          res.status(400).json({ message: "Error creating user" });
        }
      }
};

module.exports = { UsersController };