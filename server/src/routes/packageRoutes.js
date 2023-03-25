const express = require("express");
const { PackageController } = require("../controllers/packages.controllers");
const router = express.Router();

router.get("/", PackageController.getAllPackage);

module.exports = router;
