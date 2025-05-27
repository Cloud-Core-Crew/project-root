const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket.controller');
const authMiddleware = require('../middleware/auth.middleware'); // ✅ Import

// ✅ Protect POST route with JWT
router.post('/', authMiddleware, ticketController.createTicket);

// GET remains public
router.get('/', ticketController.getAllTickets);

module.exports = router;
