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

  static async confirmBooking(req, res) {
    try {
      const { id } = req.body;
      const booking = await BookingService.confirmBooking({ id });
      res.json(booking);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  static async updateCost(req, res) {
    try {
      const {
        id,
        flight_company,
        accommodation_cost,
        activities_cost,
        flight_cost,
        transportation_cost,
      } = req.body;
      const booking = await BookingService.updateCost({
        id,
        flight_company,
        accommodation_cost,
        activities_cost,
        flight_cost,
        transportation_cost,
      });
      res.json(booking);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }
}

module.exports = { BookingController };
