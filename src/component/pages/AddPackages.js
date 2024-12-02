import { useState, useEffect } from 'react';
import axios from 'axios';

const AddPackage = () => {
  const [services, setServices] = useState([]);
  const [packageData, setPackageData] = useState({ name: '', services: [], price: '' });

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get('/api/service');
      setServices(response.data);
    };
    fetchServices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/package/add', packageData);
      alert('Package added successfully!');
    } catch (error) {
      console.error('Error adding package:', error);
    }
  };

  const handleServiceChange = (e) => {
    const selectedServices = Array.from(e.target.selectedOptions, option => option.value);
    setPackageData({ ...packageData, services: selectedServices });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Package Name"
        value={packageData.name}
        onChange={(e) => setPackageData({ ...packageData, name: e.target.value })}
      />
      <select multiple onChange={handleServiceChange}>
        {services.map((service) => (
          <option key={service._id} value={service._id}>
            {service.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Price"
        value={packageData.price}
        onChange={(e) => setPackageData({ ...packageData, price: e.target.value })}
      />
      <button type="submit">Add Package</button>
    </form>
  );
};

export default AddPackage;
