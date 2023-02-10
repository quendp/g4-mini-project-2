const { RegistrationService } = require("../services/registration.service");

class RegistrationController {
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
      const user = await RegistrationService.registerUser({
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
}

module.exports = { RegistrationController };