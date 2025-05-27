const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  eventId: { type: String, required: true },
  seatNumber: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, enum: ['available', 'booked'], default: 'available' }
});

module.exports = mongoose.model('Ticket', TicketSchema);
