


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Loader2 } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Modal, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const EventService = () => {
//   const [venues, setVenues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     address: '',
//     eventDate: '',
//     event: '',
//     comments: ''
//   });
//   const navigate = useNavigate();

//   const fetchVenues = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/venues/');
//       setVenues(response.data);
//       setLoading(false);
//     } catch (error) {
//       setError('Failed to fetch venues');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVenues();
//   }, []);

//   const handleAddToCart = (venueId) => {
//     // Navigates to the Add to Cart page, passing the venueId as a parameter
//     navigate(`/cart/${venueId}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 p-8">
//       {/* Hall Container */}
//       <div className="hall-container mb-8">
//         <h2 className="text-3xl font-bold text-pink-700 mb-4">Hall for Weddings & Large Gatherings</h2>
//         <p><strong>Description:</strong> A spacious hall suitable for weddings and large gatherings.</p>
//         <p><strong>Starting Price:</strong> $10,000</p>
//         <p><strong>Price Range:</strong> $10,000 - $100,000</p>
//         <p><strong>Included Features:</strong> Seating, Air Conditioning, Parking</p>
//         <p><strong>Contact:</strong> 0778945673</p>

//         {/* View button to navigate to the Hall Details page */}
//         <button 
//           onClick={() => navigate("/hall/details")}  // Fixed URL
//           className="p-2 bg-pink-500 text-white rounded hover:bg-pink-600"
//         >
//           View Hall Details
//         </button>
//       </div>

//       <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">Available Services</h2>
//       {loading && 
//         <div className="flex justify-center">
//           <Loader2 className="h-8 w-8 animate-spin text-pink-500" />
//         </div>
//       }
//       {error && <p className="text-red-500 text-center">{error}</p>}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <AnimatePresence>
//           {venues.map((venue) => (
//             <motion.div
//               key={venue._id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="mb-4">
//                 <h3 className="text-2xl font-bold text-pink-600">{venue.serviceName}</h3>
//               </div>
//               <div className="text-gray-600">
//                 <p className="mb-2">{venue.description}</p>
//                 <p className="text-pink-500 font-semibold">Starting Price: ${venue.startingPrice}</p>
//                 <p>Price Range: {venue.priceRange}</p>
//                 <p>Included Features: {venue.includedFeatures.join(', ')}</p>
//                 <p>Contact: {venue.contactInformation}</p>
//               </div>
//               <div className="flex justify-end mt-4">
//                 <button 
//                   onClick={() => handleAddToCart(venue._id)}  // Fixed this part to navigate correctly with the venue ID
//                   className="p-2 bg-pink-500 text-white rounded hover:bg-pink-600"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default EventService;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Modal, Button } from "react-bootstrap";

// const EventService = () => {
//   const [venues, setVenues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [cart, setCart] = useState(() => {
//     const savedCart = sessionStorage.getItem("eventCart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });
//   const [showModal, setShowModal] = useState(false); // Modal visibility state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     eventDate: "",
//     event: "",
//     comments: "",
//   });

//   const navigate = useNavigate();

//   // Fetch venues from the backend
//   const fetchVenues = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/venues/");
//       setVenues(response.data);
//       setLoading(false);
//     } catch (error) {
//       setError("Failed to fetch venues");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVenues();
//   }, []);

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form data
//     if (!formData.name || !formData.email || !formData.address || !formData.eventDate || !formData.event) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     try {
//       // Save form data to backend
//       const response = await axios.post("http://localhost:5000/api/contact", formData);
//       if (response.status === 201) {
//         alert("Form data saved successfully!");

//         // Calculate 10% discount
//         const totalPrice = cart.reduce((acc, item) => acc + item.startingPrice, 0);
//         const discountPrice = (totalPrice * 10) / 100;
//         const finalPrice = totalPrice - discountPrice;

//         // Navigate to payment page with form and price details
//         navigate("/payment", {
//           state: {
//             totalPrice: finalPrice,
//             formData: formData,
//             cart: cart,
//           },
//         });
//       }
//     } catch (error) {
//       console.error("Error saving form data:", error.message);
//       alert("There was an error saving your details. Please try again.");
//     }
//   };

//   const totalPrice = cart.reduce((acc, item) => acc + item.startingPrice, 0);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 p-8">
//       <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">
//         Available Services
//       </h2>
//       {loading && <p className="text-center">Loading...</p>}
//       {error && <p className="text-red-500 text-center">{error}</p>}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {venues.map((venue) => (
//           <div
//             key={venue._id}
//             className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
//           >
//             <h3 className="text-2xl font-bold text-pink-600">{venue.serviceName}</h3>
//             <p>{venue.description}</p>
//             <p className="text-pink-500 font-semibold">
//               Starting Price: ${venue.startingPrice}
//             </p>
//             <button
//               onClick={() => {
//                 const isAlreadyInCart = cart.find((item) => item._id === venue._id);
//                 if (isAlreadyInCart) {
//                   alert("This service is already in your cart!");
//                   return; // Exit the function early
//                 }
//                 const updatedCart = [...cart, venue];
//                 setCart(updatedCart);
//                 sessionStorage.setItem("eventCart", JSON.stringify(updatedCart));
//                 alert("Service added to cart!");
//               }}
//               className="p-2 bg-pink-500 text-white rounded hover:bg-pink-600"
//             >
//               Add to Cart
//             </button>

//           </div>
//         ))}
//       </div>

//       {/* Cart Summary */}
//       <div className="mt-8 p-4 bg-white shadow-lg rounded-lg">
//         <h3 className="text-2xl font-bold text-pink-600 mb-4">Cart Summary</h3>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <>
//             <ul>
//               {cart.map((item) => (
//                 <li key={item._id} className="flex justify-between py-2">
//                   <span>{item.serviceName}</span>
//                   <span>${item.startingPrice}</span>
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-4 font-bold text-pink-700">
//               Total Price: ${totalPrice}
//             </div>
//           </>
//         )}
//         <div className="mt-4">
//           <button
//             onClick={() => setShowModal(true)}
//             className="p-2 bg-pink-500 text-white rounded hover:bg-pink-600"
//             disabled={cart.length === 0}
//           >
//             Proceed to Payment
//           </button>
//         </div>
//       </div>

//       {/* Modal for Order Management */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Order Management</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleSubmit}>
//             <div className="grid gap-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 onChange={handleChange}
//                 value={formData.name}
//                 className="p-2 border rounded"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 value={formData.email}
//                 className="p-2 border rounded"
//               />
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 onChange={handleChange}
//                 value={formData.address}
//                 className="p-2 border rounded"
//               />
//               <input
//                 type="date"
//                 name="eventDate"
//                 onChange={handleChange}
//                 value={formData.eventDate}
//                 className="p-2 border rounded"
//               />
//               <input
//                 type="text"
//                 name="event"
//                 placeholder="Event Name"
//                 onChange={handleChange}
//                 value={formData.event}
//                 className="p-2 border rounded"
//               />
//               <textarea
//                 name="comments"
//                 placeholder="Comments"
//                 onChange={handleChange}
//                 value={formData.comments}
//                 rows="4"
//                 className="p-2 border rounded"
//               ></textarea>
//               <button
//                 type="submit"
//                 className="p-2 bg-pink-500 text-white rounded hover:bg-pink-600"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default EventService;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Modal, Button, Form } from "react-bootstrap";
// import { FaShoppingCart, FaCalendarAlt, FaUser, FaEnvelope, FaMapMarkerAlt, FaComments } from "react-icons/fa";

// const EventService = () => {
//   const [venues, setVenues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [cart, setCart] = useState(() => {
//     const savedCart = sessionStorage.getItem("eventCart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     eventDate: "",
//     event: "",
//     comments: "",
//   });

//   const navigate = useNavigate();

//   const fetchVenues = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/venues/");
//       setVenues(response.data);
//       setLoading(false);
//     } catch (error) {
//       setError("Failed to fetch venues");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVenues();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.address || !formData.eventDate || !formData.event) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/contact", formData);
//       if (response.status === 201) {
//         alert("Form data saved successfully!");

//         const totalPrice = cart.reduce((acc, item) => acc + item.startingPrice, 0);
//         const discountPrice = (totalPrice * 10) / 100;
//         const finalPrice = totalPrice - discountPrice;

//         navigate("/payment", {
//           state: {
//             totalPrice: finalPrice,
//             formData: formData,
//             cart: cart,
//           },
//         });
//       }
//     } catch (error) {
//       console.error("Error saving form data:", error.message);
//       alert("There was an error saving your details. Please try again.");
//     }
//   };

//   const totalPrice = cart.reduce((acc, item) => acc + item.startingPrice, 0);

//   return (
//     <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #F0E0E5, #E0C0C8)", padding: "2rem" }}>
//       <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#921A40", marginBottom: "2rem", textAlign: "center" }}>
//         Available Services
//       </h2>
//       {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
//       {error && <p style={{ color: "#921A40", textAlign: "center" }}>{error}</p>}
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
//         {venues.map((venue) => (
//           <div
//             key={venue._id}
//             style={{
//               background: "white",
//               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//               borderRadius: "0.5rem",
//               padding: "1rem",
//               transition: "box-shadow 0.3s ease",
//             }}
//           >
//             <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#921A40" }}>{venue.serviceName}</h3>
//             <p>{venue.description}</p>
//             <p style={{ color: "#921A40", fontWeight: "600" }}>
//               Starting Price: Rs {venue.startingPrice}
//             </p>
//             <Button
//               onClick={() => {
//                 const isAlreadyInCart = cart.find((item) => item._id === venue._id);
//                 if (isAlreadyInCart) {
//                   alert("This service is already in your cart!");
//                   return;
//                 }
//                 const updatedCart = [...cart, venue];
//                 setCart(updatedCart);
//                 sessionStorage.setItem("eventCart", JSON.stringify(updatedCart));
//                 alert("Service added to cart!");
//               }}
//               variant="outline-danger"
//               style={{ backgroundColor: "#921A40", borderColor: "#921A40" }}
//             >
//               Add to Cart
//             </Button>
//           </div>
//         ))}
//       </div>

//       <div style={{ marginTop: "2rem", padding: "1rem", background: "white", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "0.5rem" }}>
//         <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#921A40", marginBottom: "1rem" }}>
//           <FaShoppingCart /> Cart Summary
//         </h3>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <>
//             <ul style={{ listStyle: "none", padding: 0 }}>
//               {cart.map((item) => (
//                 <li key={item._id} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0" }}>
//                   <span>{item.serviceName}</span>
//                   <span>{item.startingPrice}</span>
//                 </li>
//               ))}
//             </ul>
//             <div style={{ marginTop: "1rem", fontWeight: "bold", color: "#921A40" }}>
//               Total Price: ${totalPrice}
//             </div>
//           </>
//         )}
//         <div style={{ marginTop: "1rem" }}>
//           <Button
//             onClick={() => setShowModal(true)}
//             variant="danger"
//             style={{ backgroundColor: "#921A40", borderColor: "#921A40" }}
//             disabled={cart.length === 0}
//           >
//             Proceed to Payment
//           </Button>
//         </div>
//       </div>

//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Order Management</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label><FaUser /> Name</Form.Label>
//               <Form.Control type="text" name="name" onChange={handleChange} value={formData.name} required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label><FaEnvelope /> Email</Form.Label>
//               <Form.Control type="email" name="email" onChange={handleChange} value={formData.email} required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label><FaMapMarkerAlt /> Address</Form.Label>
//               <Form.Control type="text" name="address" onChange={handleChange} value={formData.address} required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label><FaCalendarAlt /> Event Date</Form.Label>
//               <Form.Control type="date" name="eventDate" onChange={handleChange} value={formData.eventDate} required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Event Name</Form.Label>
//               <Form.Control type="text" name="event" onChange={handleChange} value={formData.event} required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label><FaComments /> Comments</Form.Label>
//               <Form.Control as="textarea" rows={4} name="comments" onChange={handleChange} value={formData.comments} />
//             </Form.Group>
//             <Button type="submit" variant="danger" style={{ backgroundColor: "#921A40", borderColor: "#921A40" }}>
//               Submit
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default EventService;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Modal, Button, Form, Card, Container, Row, Col } from "react-bootstrap";
// import { FaShoppingCart, FaCalendarAlt, FaUser, FaEnvelope, FaMapMarkerAlt, FaComments, FaHeart, FaGlassCheers, FaBirthdayCake, FaRing } from "react-icons/fa";

// // Import images for different event types
// import weddingImg from '/home/uki/Downloads/event aaa/event aa/event/frontend/src/image/hall.jpg';
// import birthdayImg from '/home/uki/Downloads/event aaa/event aa/event/frontend/src/image/camara.jpeg';
// import corporateImg from '/home/uki/Downloads/event aaa/event aa/event/frontend/src/image/camara.jpeg';
// import anniversaryImg from '/home/uki/Downloads/event aaa/event aa/event/frontend/src/image/camara.jpeg';


// const EventService = () => {
//   const [venues, setVenues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [cart, setCart] = useState(() => {
//     const savedCart = sessionStorage.getItem("eventCart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     eventDate: "",
//     event: "",
//     comments: "",
//   });

//   const navigate = useNavigate();

//   const fetchVenues = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/venues/");
//       setVenues(response.data);
//       setLoading(false);
//     } catch (error) {
//       setError("Failed to fetch venues");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVenues();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.address || !formData.eventDate || !formData.event) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/contact", formData);
//       if (response.status === 201) {
//         alert("Form data saved successfully!");

//         const totalPrice = cart.reduce((acc, item) => acc + item.startingPrice, 0);
//         const discountPrice = (totalPrice * 10) / 100;
//         const finalPrice = totalPrice - discountPrice;

//         navigate("/payment", {
//           state: {
//             totalPrice: finalPrice,
//             formData: formData,
//             cart: cart,
//           },
//         });
//       }
//     } catch (error) {
//       console.error("Error saving form data:", error.message);
//       alert("There was an error saving your details. Please try again.");
//     }
//   };

//   const totalPrice = cart.reduce((acc, item) => acc + item.startingPrice, 0);

//   const getEventImage = (eventName) => {
//     switch (eventName.toLowerCase()) {
//       case 'wedding':
//         return weddingImg;
//       case 'birthday':
//         return birthdayImg;
//       case 'corporate':
//         return corporateImg;
//       case 'anniversary':
//         return anniversaryImg;
//       default:
//         return weddingImg;
//     }
//   };

//   const getEventIcon = (eventName) => {
//     switch (eventName.toLowerCase()) {
//       case 'wedding':
//         return <FaRing />;
//       case 'birthday':
//         return <FaBirthdayCake />;
//       case 'corporate':
//         return <FaGlassCheers />;
//       case 'anniversary':
//         return <FaHeart />;
//       default:
//         return <FaCalendarAlt />;
//     }
//   };

//   return (
//     <Container fluid className="py-5" style={{ background: "linear-gradient(135deg, #FCE4EC 0%, #921A40 100%)", minHeight: "100vh" }}>
//       <h1 className="text-center mb-5" style={{ color: "#921A40", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>
//         Exclusive Event Services
//       </h1>
//       {loading && <p className="text-center">Loading...</p>}
//       {error && <p className="text-center text-danger">{error}</p>}
//       <Row xs={1} md={2} lg={4} className="g-4">
//         {venues.map((venue) => (
//           <Col key={venue._id}>
//             <Card className="h-100 shadow-lg" style={{ transition: "transform 0.3s", ":hover": { transform: "scale(1.03)" } }}>
//               <Card.Img variant="top" src={getEventImage(venue.serviceName)} style={{ height: "200px", objectFit: "cover" }} />
//               <Card.Body>
//                 <Card.Title className="d-flex align-items-center mb-3">
//                   {getEventIcon(venue.serviceName)}
//                   <span className="ms-2" style={{ color: "#921A40", fontWeight: "bold" }}>{venue.serviceName}</span>
//                 </Card.Title>
//                 <Card.Text>{venue.description}</Card.Text>
//                 <Card.Text className="text-end" style={{ color: "#921A40", fontWeight: "bold" }}>
//                   Starting at Rs {venue.startingPrice}
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer className="bg-transparent border-top-0">
//                 <Button
//                   variant="outline-danger"
//                   className="w-100"
//                   style={{ borderColor: "#921A40", color: "#921A40" }}
//                   onClick={() => {
//                     const isAlreadyInCart = cart.find((item) => item._id === venue._id);
//                     if (isAlreadyInCart) {
//                       alert("This service is already in your cart!");
//                       return;
//                     }
//                     const updatedCart = [...cart, venue];
//                     setCart(updatedCart);
//                     sessionStorage.setItem("eventCart", JSON.stringify(updatedCart));
//                     alert("Service added to cart!");
//                   }}
//                 >
//                   Add to Cart
//                 </Button>
//               </Card.Footer>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       <Card className="mt-5 shadow-lg">
//         <Card.Header className="bg-danger text-white" style={{ backgroundColor: "#921A40" }}>
//           <h3 className="mb-0"><FaShoppingCart className="me-2" /> Cart Summary</h3>
//         </Card.Header>
//         <Card.Body>
//           {cart.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             <>
//               {cart.map((item) => (
//                 <div key={item._id} className="d-flex justify-content-between align-items-center mb-2">
//                   <span>{item.serviceName}</span>
//                   <span>Rs {item.startingPrice}</span>
//                 </div>
//               ))}
//               <hr />
//               <div className="d-flex justify-content-between align-items-center">
//                 <h4 className="mb-0">Total Price:</h4>
//                 <h4 className="mb-0 text-danger">Rs {totalPrice}</h4>
//               </div>
//             </>
//           )}
//         </Card.Body>
//         <Card.Footer className="bg-white">
//           <Button
//             variant="danger"
//             className="w-100"
//             style={{ backgroundColor: "#921A40", borderColor: "#921A40" }}
//             onClick={() => setShowModal(true)}
//             disabled={cart.length === 0}
//           >
//             Proceed to Payment
//           </Button>
//         </Card.Footer>
//       </Card>

//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton style={{ backgroundColor: "#FCE4EC" }}>
//           <Modal.Title style={{ color: "#921A40" }}>Order Management</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label><FaUser className="me-2" />Name</Form.Label>
//               <Form.Control type="text" name="name" onChange={handleChange} value={formData.name} required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label><FaEnvelope className="me-2" />Email</Form.Label>
//               <Form.Control type="email" name="email" onChange={handleChange} value={formData.email} required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label><FaMapMarkerAlt className="me-2" />Address</Form.Label>
//               <Form.Control type="text" name="address" onChange={handleChange} value={formData.address} required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label><FaCalendarAlt className="me-2" />Event Date</Form.Label>
//               <Form.Control type="date" name="eventDate" onChange={handleChange} value={formData.eventDate} required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Event Name</Form.Label>
//               <Form.Control type="text" name="event" onChange={handleChange} value={formData.event} required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label><FaComments className="me-2" />Comments</Form.Label>
//               <Form.Control as="textarea" rows={4} name="comments" onChange={handleChange} value={formData.comments} />
//             </Form.Group>
//             <Button type="submit" variant="danger" className="w-100" style={{ backgroundColor: "#921A40", borderColor: "#921A40" }}>
//               Submit
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// };

// export default EventService;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { FaShoppingCart, FaCalendarAlt, FaUser, FaEnvelope, FaMapMarkerAlt, FaComments } from "react-icons/fa";

const EventService = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem("eventCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    eventDate: "",
    event: "",
    comments: "",
  });

  const navigate = useNavigate();

  // Auto-refresh logic
  useEffect(() => {
    if (!sessionStorage.getItem("pageRefreshed")) {
      sessionStorage.setItem("pageRefreshed", "true");
      window.location.reload();
    }
  }, []);

  const fetchVenues = async (retryCount = 3) => {
    try {
      const response = await axios.get("http://localhost:5000/api/venues/");
      setVenues(response.data);
      setLoading(false);
    } catch (error) {
      if (retryCount > 0) {
        console.warn(`Retrying... (${3 - retryCount + 1})`);
        setTimeout(() => fetchVenues(retryCount - 1), 2000); // Retry after 2 seconds
      } else {
        setError("Failed to fetch venues after multiple attempts. Please try refreshing the page.");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchVenues();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.address || !formData.eventDate || !formData.event) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      if (response.status === 201) {
        alert("Form data saved successfully!");

        const totalPrice = cart.reduce((acc, item) => acc + item.startingPrice, 0);
        const discountPrice = (totalPrice * 10) / 100;
        const finalPrice = totalPrice - discountPrice;

        navigate("/payment", {
          state: {
            totalPrice: finalPrice,
            formData: formData,
            cart: cart,
          },
        });
      }
    } catch (error) {
      console.error("Error saving form data:", error.message);
      alert("There was an error saving your details. Please try again.");
    }
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.startingPrice, 0);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #F0E0E5, #E0C0C8)", padding: "2rem" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#921A40", marginBottom: "2rem", textAlign: "center" }}>
        Available Services
      </h2>
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p style={{ color: "#921A40", textAlign: "center" }}>{error}</p>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
        {venues.map((venue) => (
          <div
            key={venue._id}
            style={{
              background: "white",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "0.5rem",
              padding: "1rem",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#921A40" }}>{venue.serviceName}</h3>
            <p>{venue.description}</p>
            <p style={{ color: "#921A40", fontWeight: "600" }}>
              Starting Price: Rs {venue.startingPrice}
            </p>
            <Button
              onClick={() => {
                const isAlreadyInCart = cart.find((item) => item._id === venue._id);
                if (isAlreadyInCart) {
                  alert("This service is already in your cart!");
                  return;
                }
                const updatedCart = [...cart, venue];
                setCart(updatedCart);
                sessionStorage.setItem("eventCart", JSON.stringify(updatedCart));
                alert("Service added to cart!");
              }}
              variant="outline-danger"
              style={{ backgroundColor: "#921A40", borderColor: "black" ,color: "white"}}
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem", padding: "1rem", background: "white", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "0.5rem" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#921A40", marginBottom: "1rem" }}>
          <FaShoppingCart /> Cart Summary
        </h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {cart.map((item) => (
                <li key={item._id} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0" }}>
                  <span>{item.serviceName}</span>
                  <span>{item.startingPrice}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "1rem", fontWeight: "bold", color: "#921A40" }}>
              Total Price: Rs {totalPrice}
            </div>
          </>
        )}
        <div style={{ marginTop: "1rem" }}>
          <Button
            onClick={() => setShowModal(true)}
            variant="danger"
            style={{backgroundColor: "#921A40", borderColor: "black" ,color: "white"}}
            disabled={cart.length === 0}
          >
            Proceed to Payment
          </Button>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Management</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label><FaUser /> Name</Form.Label>
              <Form.Control type="text" name="name" onChange={handleChange} value={formData.name} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label><FaEnvelope /> Email</Form.Label>
              <Form.Control type="email" name="email" onChange={handleChange} value={formData.email} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label><FaMapMarkerAlt /> Address</Form.Label>
              <Form.Control type="text" name="address" onChange={handleChange} value={formData.address} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label><FaCalendarAlt /> Event Date</Form.Label>
              <Form.Control type="date" name="eventDate" onChange={handleChange} value={formData.eventDate} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="text" name="event" onChange={handleChange} value={formData.event} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label><FaComments /> Comments</Form.Label>
              <Form.Control as="textarea" rows={4} name="comments" onChange={handleChange} value={formData.comments} />
            </Form.Group>
            <Button type="submit" variant="danger" style={{ backgroundColor: "#921A40", borderColor: "#921A40" }}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EventService;
