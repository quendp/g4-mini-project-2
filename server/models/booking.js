'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Agents, Package, Payments }) {
      // define association here
      this.belongsTo(User, { foreignKey: "userId", as: "User" });
      this.belongsTo(Agents, { foreignKey: "agentId", as: "Agents" });
      this.belongsTo(Package, { foreignKey: "packageId", as: "Package" });
      this.belongsTo(Payments, { foreignKey: "paymentId", as: "Payments" });
    }
  }
  Booking.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    travel_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    starting_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    booking_status: {
      type: DataTypes.ENUM("waitlist", "tentative", "confirmed", "cancelled"),
      allowNull: false,
      defaultValue: "waitlist",
    },
    agentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    packageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paymentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};