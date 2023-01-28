const express = require("express");
const { PaymentsController } = require("../controllers/payments.controllers");
const router = express.Router();

router.post("/", PaymentsController.createPayment);
router.get("/", PaymentsController.getAllPayments);
router.get("/:id", PaymentsController.getPaymentById);
router.put("/:id", PaymentsController.updatePaymentById);
router.delete("/:id", PaymentsController.deletePaymentById);

module.exports = router;