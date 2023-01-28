const express = require("express");
const { PackageController } = require("../controllers/packages.controllers");
const router = express.Router();

router.post("/", PackageController.createPackage);
router.get("/", PackageController.getAllPackage);
router.get("/:id", PackageController.getPackageById);
router.put("/:id", PackageController.updatePackageById);
router.delete("/:id", PackageController.deletePackageById);

module.exports = router;