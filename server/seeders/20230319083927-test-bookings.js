"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Bookings", [
      {
        id: 1,
        userId: 1,
        travel_date: "2023-04-25",
        duration: "3 days",
        starting_location: "Manila",
        booking_status: "cancelled",
        agentId: 3,
        packageId: 2,
        paymentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        userId: 1,
        travel_date: "2023-05-15",
        duration: "5 days",
        starting_location: "Bacoor, Cavite",
        booking_status: "successful",
        agentId: 4,
        packageId: 45,
        paymentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        userId: 1,
        travel_date: "2023-06-12",
        duration: "2 days",
        starting_location: "Muntinlupa",
        booking_status: "confirmed",
        agentId: 5,
        packageId: 21,
        paymentId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        userId: 1,
        travel_date: "2023-04-05",
        duration: "4 days",
        starting_location: "Cebu City",
        booking_status: "tentative",
        agentId: 3,
        packageId: 55,
        paymentId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        userId: 1,
        travel_date: "2023-08-21",
        duration: "7 days",
        starting_location: "Davao City",
        booking_status: "waitlist",
        agentId: 4,
        packageId: 85,
        paymentId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Bookings", null, {});
  },
};
