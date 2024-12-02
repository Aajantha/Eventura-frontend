import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  CircularProgress,
  Typography,
} from '@mui/material';

const OrderTable = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch messages from the backend
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/contact/'); // Update with your backend endpoint
        setMessages(response.data);
      } catch (err) {
        setError('Error fetching messages');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center">
        {error}
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper} style={{ margin: '20px', padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom style={{ marginBottom: '20px', color: '#921A40' }}>
        Messages
      </Typography>

      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: '#C75B7A' }}>
            <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Name</TableCell>
            <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Email</TableCell>
            <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Address</TableCell>
            <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Event</TableCell>
            <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Event Date</TableCell>
            <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map((message) => (
            <TableRow key={message._id} hover>
              <TableCell>{message.name}</TableCell>
              <TableCell>{message.email}</TableCell>
              <TableCell>{message.address}</TableCell>
              <TableCell>{message.event}</TableCell>
              <TableCell>{new Date(message.eventDate).toLocaleDateString()}</TableCell>
              <TableCell>{message.comments || 'N/A'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
