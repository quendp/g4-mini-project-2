"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        username: "user_john",
        roleId: 1,
        firstname: "John",
        lastname: "Doe",
        email: "johndoe@user.com",
        phone_number: "09123456789",
        age: 20,
        address: "No. 1, 2nd Street, Philippines",
        password: "11111111",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        username: "admin_mark",
        roleId: 3,
        firstname: "Mark",
        lastname: "Roberts",
        email: "markroberts@user.com",
        phone_number: "02345678901",
        age: 22,
        address: "No. 3, 4th Street, Philippines",
        password: "33333333",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        username: "agent_jane",
        roleId: 2,
        firstname: "Jane",
        lastname: "Davis",
        email: "janedavis@agent.com",
        phone_number: "01234567890",
        age: 21,
        address: "No. 2, 3rd Street, Philippines",
        password: "22222222",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        username: "agent_george",
        roleId: 2,
        firstname: "George",
        lastname: "Brooks",
        email: "georgebrooks@agent.com",
        phone_number: "09123456789",
        age: 45,
        address: "No. 5, 5th Street, California, USA",
        password: "22222222",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        username: "agent_julia",
        roleId: 2,
        firstname: "Julia",
        lastname: "Pines",
        email: "juliapines@agent.com",
        phone_number: "09123456789",
        age: 45,
        address: "No. 6, 4th Street, New York, USA",
        password: "22222222",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
