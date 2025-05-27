const Ticket = require('../models/ticket.model');

exports.createTicket = async (req, res) => {
  try {
    console.log("Received POST /api/tickets with:", req.body); // ✅ log input
    const ticket = new Ticket(req.body);
    await ticket.save();
    console.log("Ticket created successfully:", ticket); // ✅ log success
    res.status(201).json(ticket);
  } catch (err) {
    console.error("Ticket creation failed:", err); // ✅ log error
    res.status(500).json({ error: err.message });
  }
};

exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
