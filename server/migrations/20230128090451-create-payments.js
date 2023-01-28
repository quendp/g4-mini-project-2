'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flight_company: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      flight_cost: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      transportation_cost: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      accommodation_cost: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      activities_cost: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      total_cost: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      payment_method: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      payment_status: {
        type: Sequelize.ENUM("pending", "complete", "refunded", "failed", "cancelled"),
        allowNull: false,
        defaultValue: "pending",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Payments');
  }
};