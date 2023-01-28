const { PaymentsService } = require("../services/payments.service");

class PaymentsController {
  static async createPayment(req, res) {
    try {
      const {
        flight_company,
        flight_cost,
        transportation_cost,
        accommodation_cost,
        activities_cost,
        total_cost,
        payment_method,
      } = req.body;
      const payment = await PaymentsService.createPayment({
        flight_company,
        flight_cost,
        transportation_cost,
        accommodation_cost,
        activities_cost,
        total_cost,
        payment_method,
      });
      res.json(payment);
    } catch (e) {
      res.status(400).json({ message: "Error creating payment" });
    }
  }

  static async getAllPayments(_req, res) {
    try {
      const payments = await PaymentsService.getAllPayments();
      res.json(payments);
    } catch (e) {
      res.status(404).json({ message: "Payments not Found" });
    }
  }

  static async getPaymentById(req, res) {
    try {
      const { id } = req.params;
      const payment = await PaymentsService.getPaymentById(id);
      res.json(payment);
    } catch (e) {
      res.status(404).json({ message: "Payment not Found" });
    }
  }

  static async updatePaymentById(req, res) {
    try {
      const { id } = req.params;
      const {
        flight_company,
        flight_cost,
        transportation_cost,
        accommodation_cost,
        activities_cost,
        total_cost,
        payment_method,
        payment_status
      } = req.body;
      const payment = await PaymentsService.updatePaymentById(id, {
        flight_company,
        flight_cost,
        transportation_cost,
        accommodation_cost,
        activities_cost,
        total_cost,
        payment_method,
        payment_status
      });
      res.json(payment);
    } catch (e) {
      res.status(404).json({ message: "Payment not Found" });
    }
  }

  static async deletePaymentById(req, res) {
    try {
      const { id } = req.params;
      const payment = await PaymentsService.deletePaymentById(id);
      res.json(payment);
    } catch (e) {
      res.status(404).json({ message: "Payment not Found" });
    }
  }
}

module.exports = { PaymentsController };