const { Agents } = require("../../models");

class AgentsService {
  static async createAgent({
    firstname,
    lastname,
    email,
    phone_number,
    password,
  }) {
    try {
      const newAgent = await Agents.create({
        firstname,
        lastname,
        email,
        phone_number,
        password,
      });
      return newAgent;
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }

  static async getAllAgents() {
    try {
      return Agents.findAll({ include: "Booking" });
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getAgentById(id) {
    try {
      return Agents.findOne({ where: { id }, include: "Booking" });
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async updateAgentById(
    id,
    {
        firstname,
        lastname,
        email,
        phone_number,
        password,
    }
  ) {
    try {
      const agentToUpdate = await Agents.findOne({ where: { id } });
      if (agentToUpdate) {
        agentToUpdate.firstname = firstname;
        agentToUpdate.lastname = lastname;
        agentToUpdate.email = email;
        agentToUpdate.phone_number = phone_number;
        agentToUpdate.password = password;
        await agentToUpdate.save();
        return agentToUpdate;
      }
      return null;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async deleteAgentById(id) {
    try {
      const agentToDelete = await Agents.findOne({ where: { id } });
      if (agentToDelete) {
        await agentToDelete.destroy();
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }
}

module.exports = { AgentsService };
