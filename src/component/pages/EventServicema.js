'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VenueManagement = () => {
  const [venues, setVenues] = useState([]);
  const [editingVenueId, setEditingVenueId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [includedFeatures, setIncludedFeatures] = useState('');
  const [contactInformation, setContactInformation] = useState('');

  const fetchVenues = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/venues');
      setVenues(response.data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this venue?')) {
      try {
        await axios.delete(`http://localhost:5000/api/venues/${id}`);
        fetchVenues(); // Refresh the list after deletion
      } catch (error) {
        console.error('Error deleting venue:', error);
      }
    }
  };

  const handleEdit = (venue) => {
    setEditingVenueId(venue._id);
    setServiceName(venue.serviceName);
    setDescription(venue.description);
    setStartingPrice(venue.startingPrice);
    setPriceRange(venue.priceRange);
    setIncludedFeatures(venue.includedFeatures.join(', ')); // Join array into string
    setContactInformation(venue.contactInformation);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingVenueId(null);
    setShowForm(false);
    // Clear the form fields
    clearFormFields();
  };

  const clearFormFields = () => {
    setServiceName('');
    setDescription('');
    setStartingPrice('');
    setPriceRange('');
    setIncludedFeatures('');
    setContactInformation('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const venueData = {
      serviceName,
      description,
      startingPrice: Number(startingPrice), // Convert to number
      priceRange,
      includedFeatures: includedFeatures.split(',').map((feature) => feature.trim()), // Split string into array
      contactInformation,
    };

    try {
      if (editingVenueId) {
        await axios.put(`http://localhost:5000/api/venues/${editingVenueId}`, venueData);
      } else {
        await axios.post('http://localhost:5000/api/venues/', venueData);
      }
      fetchVenues(); // Refresh the list after submitting
      handleCancel(); // Clear the form
    } catch (error) {
      console.error('Error saving venue:', error);
    }
  };

  useEffect(() => {
    fetchVenues();
  }, []);

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#8B1F41',
      color: '#FFFFFF',
      minHeight: '100vh',
    },
    header: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      textAlign: 'center',
    },
    addButton: {
      backgroundColor: '#FFFFFF',
      color: '#8B1F41',
      border: 'none',
      padding: '10px 20px',
      fontSize: '1rem',
      cursor: 'pointer',
      borderRadius: '5px',
      marginBottom: '20px',
    },
    form: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #FFFFFF',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: '#FFFFFF',
      fontSize: '1rem',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #FFFFFF',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: '#FFFFFF',
      fontSize: '1rem',
      minHeight: '100px',
    },
    formButton: {
      backgroundColor: '#FFFFFF',
      color: '#8B1F41',
      border: 'none',
      padding: '10px 20px',
      fontSize: '1rem',
      cursor: 'pointer',
      borderRadius: '5px',
      marginRight: '10px',
    },
    venueList: {
      listStyle: 'none',
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
    },
    venueItem: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '20px',
      borderRadius: '10px',
    },
    venueTitle: {
      fontSize: '1.5rem',
      marginBottom: '10px',
    },
    venueInfo: {
      marginBottom: '5px',
    },
    actionButton: {
      backgroundColor: '#FFFFFF',
      color: '#8B1F41',
      border: 'none',
      padding: '5px 10px',
      fontSize: '0.9rem',
      cursor: 'pointer',
      borderRadius: '5px',
      marginRight: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Venues</h2>
      <button 
        style={styles.addButton} 
        onClick={() => { setShowForm(true); clearFormFields(); }}
      >
        Add Venue
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Service Name"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
            style={styles.input}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={styles.textarea}
          />
          <input
            type="number"
            placeholder="Starting Price"
            value={startingPrice}
            onChange={(e) => setStartingPrice(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Price Range"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Included Features (comma separated)"
            value={includedFeatures}
            onChange={(e) => setIncludedFeatures(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Contact Information"
            value={contactInformation}
            onChange={(e) => setContactInformation(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.formButton}>
            {editingVenueId ? 'Update' : 'Create'} Venue
          </button>
          <button type="button" onClick={handleCancel} style={styles.formButton}>
            Cancel
          </button>
        </form>
      )}
      <ul style={styles.venueList}>
        {venues.map((venue) => (
          <li key={venue._id} style={styles.venueItem}>
            <h3 style={styles.venueTitle}>{venue.serviceName}</h3>
            <p style={styles.venueInfo}>{venue.description}</p>
            <p style={styles.venueInfo}>Starting Price: ${venue.startingPrice}</p>
            <p style={styles.venueInfo}>Price Range: {venue.priceRange}</p>
            <p style={styles.venueInfo}>Included Features: {venue.includedFeatures.join(', ')}</p>
            <p style={styles.venueInfo}>Contact: {venue.contactInformation}</p>
            <button onClick={() => handleEdit(venue)} style={styles.actionButton}>Edit</button>
            <button onClick={() => handleDelete(venue._id)} style={styles.actionButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VenueManagement;

