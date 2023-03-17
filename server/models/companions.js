"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Companions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Bookings }) {
      // define association here
      this.belongsTo(Bookings, { foreignKey: "bookingId", as: "Bookings" });
    }
  }
  Companions.init(
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bookingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Companions",
    }
  );
  return Companions;
};
