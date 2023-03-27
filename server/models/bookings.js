"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Packages, Payments, Companions }) {
      // define association here
      this.belongsTo(Users, { foreignKey: "userId", as: "Users" });
      this.belongsTo(Users, { foreignKey: "agentId", as: "Agent" });
      this.belongsTo(Packages, { foreignKey: "packageId", as: "Packages" });
      this.belongsTo(Payments, { foreignKey: "paymentId", as: "Payments" });
      this.hasMany(Companions, { foreignKey: "bookingId", as: "Companions" });
    }
  }
  Bookings.init(
    {
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
        type: DataTypes.ENUM(
          "waitlist",
          "tentative",
          "confirmed",
          "successful",
          "cancelled"
        ),
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
    },
    {
      sequelize,
      modelName: "Bookings",
    }
  );
  return Bookings;
};
