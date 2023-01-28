'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn("bookings", "booking_status", {
        type: Sequelize.ENUM("waitlist", "tentative", "confirmed", "cancelled"),
        allowNull: false,
        defaultValue: "waitlist",
      }),
      queryInterface.addColumn("bookings", "agentId", {
        type: Sequelize.INTEGER,
        allowNull: false,
      }),
      queryInterface.addColumn("bookings", "packageId", {
        type: Sequelize.INTEGER,
        allowNull: false,
      }),
      queryInterface.addColumn("bookings", "paymentId", {
        type: Sequelize.INTEGER,
        allowNull: false,
      }),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn("bookings",  "booking_status"), 
      queryInterface.removeColumn("bookings", "agentId"),
      queryInterface.removeColumn("bookings", "packageId"),
      queryInterface.removeColumn("bookings", "paymentId"),
    ]);
  }
};
