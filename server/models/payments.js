'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Booking }) {
      this.hasOne(Booking, { foreignKey: "paymentId", as: "Booking"})
    }
  }
  Payments.init({
    flight_company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flight_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    transportation_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    accommodation_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    activities_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    total_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    payment_method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payment_status: {
      type: DataTypes.ENUM("pending", "complete", "refunded", "failed", "cancelled"),
      allowNull: false,
      defaultValue: "pending",
    }
  }, {
    sequelize,
    modelName: 'Payments',
  });
  return Payments;
};