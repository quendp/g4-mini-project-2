"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Packages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Bookings }) {
      this.hasMany(Bookings, { foreignKey: "packageId", as: "Bookings" });
    }
  }
  Packages.init(
    {
      package_type: {
        type: DataTypes.ENUM("Basic", "Standard", "Premium"),
        allowNull: false,
      },
      destination: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      destination_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flight_class: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transportation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accommodation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      activities: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      starting_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Packages",
    }
  );
  return Packages;
};
