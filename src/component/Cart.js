import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ userId }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        fetch('http://localhost:5000/api/cart')
        const data = await response.json();
        setCart(data);

        // Calculate total price
        const total = data.reduce((acc, item) => acc + item.startingPrice, 0);
        setTotalPrice(total);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [userId]);

  const handleRemoveItem = async (id) => {
    try {
      await fetch(`/api/cart/remove/${id}`, { method: 'DELETE' });
      setCart(cart.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleAddMoreServices = () => {
    navigate('/services');
  };

  const handleProceedToPayment = () => {
    alert('Proceeding to payment...');
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 p-8">
      <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">Your Cart</h2>
      <div className="grid grid-cols-1 gap-6">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((venue) => (
            <div key={venue._id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-pink-600">{venue.serviceName}</h3>
                <p className="text-gray-700">{venue.description}</p>
                <p><strong>Price:</strong> ${venue.startingPrice}</p>
                <p><strong>Price Range:</strong> {venue.priceRange}</p>
                <p><strong>Contact:</strong> {venue.contactInformation}</p>
                <div className="mt-2">
                  <h4 className="text-pink-600 font-semibold">Included Features:</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    {venue.includedFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(venue._id)}
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-bold text-pink-600">Total Price: ${totalPrice}</h3>
          <button
            onClick={handleAddMoreServices}
            className="mt-4 p-2 bg-pink-500 text-white rounded hover:bg-pink-600 mr-4"
          >
            Add More Services
          </button>
          <button
            onClick={handleProceedToPayment}
            className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
