const { BookingService } = require("../services/bookings.service");

class BookingController {
  static async addBooking(req, res) {
    try {
      const {
        username,
        travel_date,
        duration,
        starting_location,
        package_id,
        companions,
      } = req.body;
      console.log(username);
      const booking = await BookingService.addBooking({
        username,
        travel_date,
        duration,
        starting_location,
        package_id,
        companions,
      });
      res.json(booking);
    } catch (e) {
      res.status(400).json({ message: "Error booking tour" });
    }
  }
}

module.exports = { BookingController };
