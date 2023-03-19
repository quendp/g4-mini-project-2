"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Payments", [
      {
        id: 1,
        flight_company: "Philippine Airlines",
        flight_cost: 3000,
        transportation_cost: 2700,
        accommodation_cost: 4500,
        activities_cost: 2000,
        total_cost: 12200,
        payment_method: "Paypal",
        payment_status: "cancelled",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        flight_company: "Cebu Pacific",
        flight_cost: 2500,
        transportation_cost: 3000,
        accommodation_cost: 4000,
        activities_cost: 1500,
        total_cost: 11000,
        payment_method: "Paypal",
        payment_status: "complete",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        flight_company: "Air Asia Philippines",
        flight_cost: 2000,
        transportation_cost: 3000,
        accommodation_cost: 5500,
        activities_cost: 1500,
        total_cost: 12000,
        payment_method: "GCash",
        payment_status: "refunded",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        flight_company: "Philippine Airlines",
        flight_cost: 4500,
        transportation_cost: 3000,
        accommodation_cost: 5500,
        activities_cost: 3000,
        total_cost: 16000,
        payment_method: "Debit Card",
        payment_status: "failed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        flight_company: "Cebu Pacific",
        flight_cost: 2500,
        transportation_cost: 3500,
        accommodation_cost: 7500,
        activities_cost: 4000,
        total_cost: 17500,
        payment_method: "Paypal",
        payment_status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Payments", null, {});
  },
};
