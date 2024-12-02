import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventDashboard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/servicedash');
        setEvents(response.data);
      } catch (err) {
        setError('Error fetching events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Handle loading and error states
  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Event Dashboard</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Event Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Date</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Location</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {events.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No events found.</td>
            </tr>
          ) : (
            events.map((event) => (
              <tr key={event._id}>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{event.eventName}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                  {new Date(event.date).toLocaleDateString()}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{event.location}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{event.description}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EventDashboard;
