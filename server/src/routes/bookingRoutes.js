const express = require("express");
const { BookingController } = require("../controllers/bookings.controllers");
const router = express.Router();

router.post("/", BookingController.createBooking);
router.get("/", BookingController.getAllBooking);
router.get("/:id", BookingController.getBookingById);
router.put("/:id", BookingController.updateBookingById);
router.delete("/:id", BookingController.deleteBookingById);

module.exports = router;
