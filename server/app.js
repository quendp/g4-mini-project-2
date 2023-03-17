const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { sequelize } = require("./models");
require("./auth/passport");

const userRoutes = require("./src/routes/userRoutes");
const bookingRoutes = require("./src/routes/bookingRoutes");
const packageRoutes = require("./src/routes/packageRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes");
const companionRoutes = require("./src/routes/companionRoutes");

// parse application/json
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/companions", companionRoutes);

app.listen(process.env.PORT || 5000, async () => {
  console.log("Server started on port 5000");
  await sequelize.authenticate();
});
