'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking.init({
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
      type: DataTypes.ENUM("waitlist", "tentative", "confirmed"),
      allowNull: false,
      defaultValue: "waitlist",
    }
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};