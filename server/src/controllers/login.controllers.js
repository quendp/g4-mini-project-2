const { LoginService } = require("../services/login.service");

class LoginController {
  static async loginUser(req, res) {
    try {
      const {
        username,
        email,
        password,
      } = req.body;
      const user = await LoginService.loginUser({
        username,
        email,
        password,
      });
      res.json(user);
    } catch (e) {
      res.status(400).json({ message: "Error creating user" });
    }
  }
}

module.exports = { LoginController };