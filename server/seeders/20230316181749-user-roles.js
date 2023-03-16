"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Roles", [
      {
        id: 1,
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        role: "agent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Roles", null, {});
  },
};
