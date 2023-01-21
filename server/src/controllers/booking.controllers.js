const { BookingService } = require("../services/booking.service");

class BookingController {
  static async createBooking(req, res) {
    try {
      const {
        userId,
        travel_date,
        duration,
        starting_location
      } = req.body;
      const booking = await BookingService.createBooking({
        userId,
        travel_date,
        duration,
        starting_location
      });
      res.json(booking);
    } catch (e) {
      res.status(400).json({ message: "Error booking tour" });
    }
  }

  static async getAllBooking(_req, res) {
    try {
      const bookings = await BookingService.getAllBooking();
      res.json(bookings);
    } catch (e) {
      res.status(404).json({ message: "Booking not Found" });
    }
  }

  static async getBookingById(req, res) {
    try {
      const { id } = req.params;
      const booking = await BookingService.getBookingById(id);
      res.json(booking);
    } catch (e) {
      res.status(404).json({ message: "Booking not Found" });
    }
  }

  static async updateBookingById(req, res) {
    try {
      const { id } = req.params;
      const {
        travel_date,
        duration,
        starting_location,
        booking_status
      } = req.body;
      const booking = await BookingService.updateBookingById(id, {
        travel_date,
        duration,
        starting_location,
        booking_status
      });
      res.json(booking);
    } catch (e) {
      res.status(404).json({ message: "Booking not Found" });
    }
  }

  static async deleteBookingById(req, res) {
    try {
      const { id } = req.params;
      const booking = await BookingService.deleteBookingById(id);
      res.json(booking);
    } catch (e) {
      res.status(404).json({ message: "Booking not Found" });
    }
  }
}

module.exports = { BookingController };