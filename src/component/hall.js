import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Modal, Button, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EventService = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedHall, setSelectedHall] = useState(null); // Track selected hall for detailed view
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const fetchVenues = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/venues');
      setVenues(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch venues');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVenues();
  }, []);

  const handleOpenModal = (venue) => {
    setSelectedHall(venue); // Set selected hall
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedHall(null); // Clear selection on close
  };

  const handleAddToCart = (venue) => {
    setCart((prevCart) => [...prevCart, venue]);
    setTotalPrice((prevTotal) => prevTotal + venue.startingPrice);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 p-8">
      <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">Available Services</h2>
      {loading && 
        <div className="flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-pink-500" />
        </div>
      }
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {venues.map((venue) => (
            <motion.div
              key={venue._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleOpenModal(venue)}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-pink-600">{venue.serviceName}</h3>
              </div>
              <div className="text-gray-600">
                <p className="mb-2">{venue.description}</p>
                <p className="text-pink-500 font-semibold">Starting Price: ${venue.startingPrice}</p>
                <p>Price Range: {venue.priceRange}</p>
                <p>Included Features: {venue.includedFeatures.join(', ')}</p>
                <p>Contact: {venue.contactInformation}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedHall?.serviceName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedHall && (
            <>
              <p>{selectedHall.description}</p>
              <p><strong>Starting Price:</strong> ${selectedHall.startingPrice}</p>
              <Carousel>
                {selectedHall.photos.map((photo, index) => (
                  <Carousel.Item key={index}>
                    <img className="d-block w-100" src={photo} alt={`Slide ${index}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button 
            variant="primary" 
            onClick={() => handleAddToCart(selectedHall)}
          >
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EventService;
