"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      travel_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      duration: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      starting_location: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      booking_status: {
        allowNull: false,
        type: Sequelize.ENUM(
          "waitlist",
          "tentative",
          "confirmed",
          "cancelled",
          "successful"
        ),
        defaultValue: "waitlist",
      },
      agentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      packageId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      paymentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Bookings");
  },
};
