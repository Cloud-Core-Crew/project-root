const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket.model');
const auth = require('../middleware/auth'); // ✅ JWT middleware

// @route   POST /api/tickets
// @desc    Book a ticket (protected)
router.post('/', auth, async (req, res) => {
  try {
    const { name, email, quantity, eventId } = req.body;

    const ticket = new Ticket({
      name,
      email,
      quantity,
      eventId,
      userId: req.user.id // ✅ From token
    });

    await ticket.save();
    res.status(201).json({ message: 'Ticket booked successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to book ticket' });
  }
});

// @route   GET /api/tickets
// @desc    Get all tickets (optional)
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tickets' });
  }
});

// @route   GET /api/tickets/my-tickets
// @desc    Get current user's tickets (protected)
router.get('/my-tickets', auth, async (req, res) => {
  try {
    const tickets = await Ticket.find({ userId: req.user.id });
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user tickets' });
  }
});

module.exports = router;
