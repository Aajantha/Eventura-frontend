// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaCalendar, FaGift } from 'react-icons/fa';

// const Event = () => {
//   const [events, setEvents] = useState([]);
//   const [newEvent, setNewEvent] = useState({
//     eventName: '',
//     date: '',
//     location: '',
//     description: ''
//   });
//   const navigate = useNavigate();

//   // Fetch events from the backend
//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/servicedash');
//       setEvents(response.data);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   // Use useEffect to fetch events on component mount
//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   // Handle input change for the new event form
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEvent({ ...newEvent, [name]: value });
//   };

//   // Handle form submission to add a new event
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/servicedash', newEvent);
//       // Optionally reset the form
//       setNewEvent({ eventName: '', date: '', location: '', description: '' });
//       fetchEvents(); // Refresh the event list
//     } catch (error) {
//       console.error('Error adding event:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Events</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Event Name:</label>
//           <input
//             type="text"
//             name="eventName"
//             value={newEvent.eventName}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={newEvent.date}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Location:</label>
//           <input
//             type="text"
//             name="location"
//             value={newEvent.location}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={newEvent.description}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Add Event</button>
//       </form>

//       <div className="event-list">
//         {events.map((event) => (
//           <div key={event._id} className="event-card">
//             <h2>{event.eventName}</h2>
//             <p><FaCalendar /> {new Date(event.date).toLocaleDateString()}</p>
//             <p><FaGift /> {event.location}</p>
//             <p>{event.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Event;



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaCalendar, FaGift } from 'react-icons/fa';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const Event = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    eventName: '',
    date: '',
    location: '',
    description: '',
  });
  const navigate = useNavigate();

  // Fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/servicedash');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  // Use useEffect to fetch events on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle input change for the new event form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // Handle form submission to add a new event
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/servicedash', newEvent);
      // Optionally reset the form
      setNewEvent({ eventName: '', date: '', location: '', description: '' });
      fetchEvents(); // Refresh the event list
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Events
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Event Name"
              name="eventName"
              value={newEvent.eventName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date"
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              required
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={newEvent.location}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="#8B1F41">
              Add Event
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{event.eventName}</Typography>
                <Typography color="text.secondary" gutterBottom>
                  <FaCalendar /> {new Date(event.date).toLocaleDateString()}
                </Typography>
                <Typography color="text.secondary">
                  <FaGift /> {event.location}
                </Typography>
                <Typography>{event.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => navigate(`/event/${event._id}`)}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Event;
