import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateVenue = () => {
  const [formData, setFormData] = useState({
    serviceName: '',
    description: '',
    startingPrice: '',
    priceRange: '',
    includedFeatures: '',
    contactInformation: '',
    photos: [],
  });

  // Fetch existing data when component mounts
  useEffect(() => {
    const fetchVenueData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hall'); // Replace with your actual endpoint and ID if necessary
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching venue data:', error);
      }
    };

    fetchVenueData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photos: e.target.files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (key === 'photos') {
        for (let i = 0; i < formData.photos.length; i++) {
          data.append('photos', formData.photos[i]);
        }
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post('/api/halls', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data); // Handle success
    } catch (error) {
      console.error('Error creating venue:', error); // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="serviceName" placeholder="Service Name" value={formData.serviceName} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input type="number" name="startingPrice" placeholder="Starting Price" value={formData.startingPrice} onChange={handleChange} required />
      <input type="text" name="priceRange" placeholder="Price Range" value={formData.priceRange} onChange={handleChange} />
      <input type="text" name="includedFeatures" placeholder="Included Features (comma separated)" value={formData.includedFeatures} onChange={handleChange} required />
      <input type="text" name="contactInformation" placeholder="Contact Information" value={formData.contactInformation} onChange={handleChange} required />
      <input type="file" name="photos" onChange={handleFileChange} multiple required />
      <button type="submit">Create Venue</button>
    </form>
  );
};

export default CreateVenue;
