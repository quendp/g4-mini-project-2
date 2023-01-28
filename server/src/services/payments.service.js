const { Payments } = require("../../models");

class PaymentsService {
  static async createPayment({
    flight_company,
    flight_cost,
    transportation_cost,
    accommodation_cost,
    activities_cost,
    total_cost,
    payment_method,
  }) {
    try {
      const newPayment = await Payments.create({
        flight_company,
        flight_cost,
        transportation_cost,
        accommodation_cost,
        activities_cost,
        total_cost,
        payment_method,
      });
      return newPayment;
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }

  static async getAllPayments() {
    try {
      return Payments.findAll();
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getPaymentById(id) {
    try {
      return Payments.findOne({ where: { id } });
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async updatePaymentById(
    id,
    {
        flight_company,
        flight_cost,
        transportation_cost,
        accommodation_cost,
        activities_cost,
        total_cost,
        payment_method,
        payment_status
    }
  ) {
    try {
      const paymentToUpdate = await Payments.findOne({ where: { id } });
      if (paymentToUpdate) {
        paymentToUpdate.flight_company = flight_company;
        paymentToUpdate.flight_cost = flight_cost;
        paymentToUpdate.transportation_cost = transportation_cost;
        paymentToUpdate.accommodation_cost = accommodation_cost;
        paymentToUpdate.activities_cost = activities_cost;
        paymentToUpdate.total_cost = total_cost;
        paymentToUpdate.payment_method = payment_method;
        paymentToUpdate.payment_status = payment_status;
        await paymentToUpdate.save();
        return paymentToUpdate;
      }
      return null;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async deletePaymentById(id) {
    try {
      const PaymentToDelete = await Payments.findOne({ where: { id } });
      if (PaymentToDelete) {
        await PaymentToDelete.destroy();
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }
}

module.exports = { PaymentsService };
