const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { sequelize } = require("./models");
const userRoutes = require("./src/routes/userRoutes");
const bookingRoutes = require("./src/routes/bookingRoutes");
const agentRoutes = require("./src/routes/agentRoutes");

// parse application/json
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/agents", agentRoutes);

app.listen(3000, async () => {
  console.log("Server started on port 3000");
  await sequelize.authenticate();
});