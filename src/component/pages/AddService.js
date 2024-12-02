import { useState } from 'react';
import axios from 'axios';

const AddService = () => {
  const [service, setService] = useState({ name: '', description: '', price: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/service/add', service);
      alert('Service added successfully!');
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Service Name"
        value={service.name}
        onChange={(e) => setService({ ...service, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={service.description}
        onChange={(e) => setService({ ...service, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={service.price}
        onChange={(e) => setService({ ...service, price: e.target.value })}
      />
      <button type="submit">Add Service</button>
    </form>
  );
};

export default AddService;
