const { booking } = require("../../models");

class BookingService {
  static async createBooking({
    userId,
    travel_date,
    duration,
    starting_location
  }) {
    try {
      const newBooking = await booking.create({
        userId,
        travel_date,
        duration,
        starting_location
      });
      return newBooking;
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }

  static async getAllBooking() {
    try {
      return booking.findAll();
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getBookingById(id) {
    try {
      return booking.findOne({ where: { id } });
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async updateBookingById(
    id,
    {
        travel_date,
        duration,
        starting_location,
        booking_status
    }
  ) {
    try {
      const bookingToUpdate = await booking.findOne({ where: { id } });
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
      const bookingToDelete = await booking.findOne({ where: { id } });
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
