const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  type: { type: String, enum: ['ticket', 'merch'], required: true },
  itemId: { type: String, required: true },
  quantity: { type: Number, default: 1 }
});

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [ItemSchema],
  status: { type: String, enum: ['pending', 'paid', 'cancelled'], default: 'pending' },
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);