const { Bookings } = require("../../models");

class BookingService {
  static async createBooking({
    userId,
    travel_date,
    duration,
    starting_location,
    agentId,
    packageId,
    paymentId,
  }) {
    try {
      const newBooking = await Bookings.create({
        userId,
        travel_date,
        duration,
        starting_location,
        agentId,
        packageId,
        paymentId,
      });
      return newBooking;
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }

  static async getAllBooking() {
    try {
      return Bookings.findAll({
        include: ["Packages", "Payments", "Companions"],
      });
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getBookingById(id) {
    try {
      return Bookings.findOne({
        where: { id },
        include: ["Packages", "Payments", "Companions"],
      });
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async updateBookingById(
    id,
    { travel_date, duration, starting_location, booking_status }
  ) {
    try {
      const bookingToUpdate = await Bookings.findOne({ where: { id } });
      if (bookingToUpdate) {
        bookingToUpdate.travel_date = travel_date;
        bookingToUpdate.duration = duration;
        bookingToUpdate.starting_location = starting_location;
        bookingToUpdate.booking_status = booking_status;
        await bookingToUpdate.save();
        return bookingToUpdate;
      }
      return null;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async deleteBookingById(id) {
    try {
      const bookingToDelete = await Bookings.findOne({ where: { id } });
      if (bookingToDelete) {
        await bookingToDelete.destroy();
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }
}

module.exports = { BookingService };
