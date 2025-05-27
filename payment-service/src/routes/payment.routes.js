const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');

// POST /api/payments – Create a new payment
router.post('/', paymentController.createPayment);

// GET /api/payments – Get all payments
router.get('/', paymentController.getAllPayments);

module.exports = router;
