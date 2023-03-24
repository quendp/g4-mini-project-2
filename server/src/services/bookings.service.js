const { Bookings, Users, Payments, Companions } = require("../../models");

class BookingService {
  static async addBooking({
    username,
    travel_date,
    duration,
    starting_location,
    package_id,
    companions,
  }) {
    try {
      // Check if user exists
      const user = await Users.findOne({ where: { username } });
      if (!user)
        return { message: "Failed to submit booking. Try again later." };
      // get userId
      const userId = user.id;

      // Automatically assign least occupied agent to the booking
      const agents = await Users.findAll({
        where: { roleId: 2 },
        attributes: ["id"],
      });
      let agentsArr = [];
      for (const agent of agents) {
        const bookings = await Bookings.count({
          where: { agentId: agent.id },
        });
        agentsArr = [...agentsArr, { id: agent.id, bookings: bookings }];
      }
      agentsArr.sort((a, b) => a.bookings - b.bookings);
      // Get agentId
      const agentId = agentsArr[0].id;

      // Create new payment instance
      const payment = await Payments.create({
        flight_company: "pending",
        flight_cost: 0,
        transportation_cost: 0,
        accommodation_cost: 0,
        activities_cost: 0,
        total_cost: 0,
        payment_method: "pending",
      });
      // Get paymentId
      const paymentId = payment.id;

      // Create new booking instance
      const newBooking = await Bookings.create({
        userId,
        travel_date,
        duration,
        starting_location,
        agentId,
        packageId: package_id,
        paymentId,
      });

      // Create companions instance
      if (companions) {
        const companionsWithIds = companions.map((comp) => ({
          ...comp,
          bookingId: newBooking.id,
        }));
        const bookCompanions = await Companions.bulkCreate(companionsWithIds, {
          fields: ["firstname", "lastname", "age", "bookingId"],
        });
        return { Booking: newBooking, Companions: bookCompanions };
      }

      return { Booking: newBooking, Companions: [] };
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }
}

module.exports = { BookingService };
