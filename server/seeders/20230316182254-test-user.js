"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "user_john",
        roleId: 1,
        firstname: "John",
        lastname: "Doe",
        email: "johndoe@user.com",
        phone_number: 9123456789,
        age: 20,
        address: "No. 1, 2nd Street, Philippines",
        password: "11111111",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "agent_jane",
        roleId: 2,
        firstname: "Jane",
        lastname: "Davis",
        email: "janedavis@agent.com",
        phone_number: 1234567890,
        age: 21,
        address: "No. 2, 3rd Street, Philippines",
        password: "22222222",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "admin_mark",
        roleId: 3,
        firstname: "Mark",
        lastname: "Roberts",
        email: "markroberts@user.com",
        phone_number: 2345678901,
        age: 22,
        address: "No. 3, 4th Street, Philippines",
        password: "33333333",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
