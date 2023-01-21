'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("bookings", "userId", {
        type: Sequelize.INTEGER,
        allowNull: false,
      }),
      queryInterface.addColumn("bookings", "booking_status", {
        type: Sequelize.ENUM("waitlist", "tentative", "confirmed"),
        allowNull: false,
        defaultValue: "waitlist",
      }),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("bookings", "userId"), 
      queryInterface.removeColumn("bookings", "booking_status")]);
  }
};
