require('dotenv').config(); // ✅ Load env first

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const ticketRoutes = require('./routes/ticket.routes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Optional logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use('/api/tickets', ticketRoutes);

module.exports = app;
