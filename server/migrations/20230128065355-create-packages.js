"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Packages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      package_type: {
        type: Sequelize.ENUM("Basic", "Standard", "Premium"),
        allowNull: false,
      },
      destination: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destination_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      flight_class: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      transportation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      accommodation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      activities: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      starting_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
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
    await queryInterface.dropTable("Packages");
  },
};
