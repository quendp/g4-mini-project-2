const { user } = require("../../../models");

class UsersService {
    static async createUser({username, firstname, lastname, email, phone_number, age, address, password}) {
        try {
            const newUser = await user.create({username, firstname, lastname, email, phone_number, age, address, password});
            return newUser;
        } catch (err) {
            console.log(err);
            throw new Error();
        }
    }
}

module.exports = { UsersService }