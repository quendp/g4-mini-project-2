const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { sequelize } = require("./models");
const userRoutes = require("./src/routes/userRoutes");

// parse application/json
app.use(bodyParser.json());

app.use("/api/users", userRoutes)

app.listen(3000, async () => {
  console.log("Server started on port 3000");
  await sequelize.authenticate();
});