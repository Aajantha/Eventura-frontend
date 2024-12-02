import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './component/Home.js';
import SignIn from './component/SignIn.js';
import SignUp from './component/SignUp.js';
import AdminDashboard from './component/admindash.js';
import UserDashboard from './component/userdash.js';
import EventDashboard from './component/EventServiceDash/eventdash.js';
import NavBar from './component/Navbar.js';
import AboutUs from './component/AboutUs.js';
import Event from './component/Event.js';
import EventService from './component/EventService.js';
import AddEvent from './component/servicedaash.js'; // Ensure AddEvent component path is correct
import Cart from './component/Cart.js'; // Import Cart component
import './component/css/dashboard.css'; // Import CSS
import { CartProvider } from './component/Cartcontext.js';
import Payment from './component/Payment.js'; // Import Cart component

// PrivateRoute component for role-based routing
const PrivateRoute = ({ element, allowedRole }) => {
  const role = localStorage.getItem('role');
  const token = localStorage.getItem('token');
  return token && role === allowedRole ? element : <Navigate to="/signin" />;
};

const App = () => (
  <Router>
    <CartProvider>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/events" element={<Event />} />
        <Route path="/services" element={<EventService />} />
        <Route path="/Payment" element={<Payment />} />
        
        {/* <Route path="/hall/:id" element={<HallDetails />} /> */}

        {/* New route for AddEvent - accessible only to admins */}
        <Route 
          path="/add-event" 
          element={<PrivateRoute allowedRole="admin" element={<AddEvent />} />} 
        />

        {/* Cart route */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
    </CartProvider>
  </Router>
  
);

export default App;
