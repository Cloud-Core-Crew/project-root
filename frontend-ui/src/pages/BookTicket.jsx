import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BookTicket() {
  const [events, setEvents] = useState([]);
  const [eventId, setEventId] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_EVENTS_URL}/api/events`).then(res => {
      setEvents(res.data);
      if (res.data.length > 0 && eventId === '') {
        setEventId(res.data[0]._id); // ✅ Set default event only if blank
      }
    });
  }, []);

  const handleBook = async () => {
    if (!eventId || seatNumber.trim() === '' || price.trim() === '') {
      setMessage("All fields are required.");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_TICKETS_URL}/api/tickets`, {
        eventId,
        seatNumber,
        price: parseFloat(price)
      });

      console.log("Booking response:", response.data);
      setMessage('✅ Ticket booked successfully!');
    } catch (err) {
      console.error("Booking error:", err.response?.data || err.message);
      setMessage('❌ Booking failed. Check console.');
    }
  };

  return (
    <div>
      <h2>Book a Ticket</h2>

      <label>Event:</label><br />
      <select value={eventId} onChange={e => setEventId(e.target.value)}>
        {events.map(e => (
          <option key={e._id} value={e._id}>{e.title}</option>
        ))}
      </select><br /><br />

      <input
        placeholder="Seat Number"
        value={seatNumber}
        onChange={e => setSeatNumber(e.target.value)}
      /><br />

      <input
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
      /><br /><br />

      <button onClick={handleBook}>Book</button>
      <p>{message}</p>
    </div>
  );
}
