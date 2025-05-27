import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_EVENTS_URL}/api/events`).then(res => setEvents(res.data));
  }, []);

  return (
    <div>
      <h2>Events</h2>
      {events.length === 0 ? <p>No events available</p> : (
        <ul>
          {events.map(e => (
            <li key={e._id}>{e.title} - {e.location} on {new Date(e.date).toLocaleString()}</li>
          ))}
        </ul>
      )}
    </div>
  );
}