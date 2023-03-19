"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Companions", [
      {
        id: 1,
        firstname: "Albert",
        lastname: "Smith",
        age: 22,
        bookingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstname: "Julia",
        lastname: "Roberts",
        age: 21,
        bookingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        firstname: "Micheal",
        lastname: "Brooks",
        age: 43,
        bookingId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        firstname: "Tyrone",
        lastname: "Smith",
        age: 12,
        bookingId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        firstname: "Joanna",
        lastname: "Rivers",
        age: 18,
        bookingId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Companions", null, {});
  },
};
