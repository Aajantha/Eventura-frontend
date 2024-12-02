// // // src/components/EventList.js
// // // import React from 'react';

// // // const Event = ({ events, onSelectEvent }) => {
// // //   return (
// // //     <div>
// // //       <h2>Select an Event</h2>
// // //       <ul>
// // //         {events.map(event => (
// // //           <li key={event.id} onClick={() => onSelectEvent(event)}>
// // //             {event.name}
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default Event;



// // import React, { useState, useEffect } from 'react';

// // const Event = () => {
// //   const [events, setEvents] = useState([]);

// //   useEffect(() => {
// //     // Simulate a data fetch or API call
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch('your-api-endpoint');
// //         const data = await response.json();
// //         setEvents(data.events || []); // Ensure it's an array
// //       } catch (error) {
// //         console.error("Error fetching events:", error);
// //         setEvents([]); // Set to empty array if fetch fails
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Events</h1>
// //       <ul>
// //         {events && events.length > 0 ? (
// //           events.map((event) => (
// //             <li key={event.id}>{event.name}</li>
// //           ))
// //         ) : (
// //           <p>No events available</p>
// //         )}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Event;


// // // src/component/Events.js
// // import React from "react";
// // import { Card, Button } from "react-bootstrap";
// // import './css/Home.css';

// // export default function Events() {
// //   return (
// //     <div className="container py-5">
// //       <h2 className="display-5 text-center mb-4">Types of Events</h2>
// //       <div className="row">
// //         {["Weddings", "Birthdays", "Corporate", "Anniversaries"].map((event, index) => (
// //           <div className="col-md-3" key={index}>
// //             <Card className="text-center">
// //               <Card.Body>
// //                 <Card.Title>{event}</Card.Title>
// //                 <Button variant="link">View Details</Button>
// //               </Card.Body>
// //             </Card>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const Event = () => {
// //   // State to store the fetched events
// //   const [events, setEvents] = useState([]);
// //   const [error, setError] = useState('');

// //   // Fetch events when the component mounts
// //   useEffect(() => {
// //     const fetchEvents = async () => {
// //       try {
// //         // Make a GET request to fetch the events
// //         const response = await axios.get('http://localhost:5000/api/events/Getevents');
// //         setEvents(response.data); // Set the fetched events in state
// //       } catch (err) {
// //         console.error('Error fetching events:', err);
// //         setError('Failed to fetch events');
// //       }
// //     };

// //     fetchEvents();
// //   }, []);

// //   return (
// //     <div className="container">
// //       <h1>All Events</h1>

// //       {/* Display error message if any */}
// //       {error && <p style={{ color: 'red' }}>{error}</p>}

// //       {/* Render the list of events */}
// //       <ul>
// //         {events.map((event) => (
// //           <li key={event._id}>
// //             <h3>{event.eventName}</h3>
// //             <p>{event.description}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // // export default Event;
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { FaCalendar, FaGift, FaHeart, FaBirthdayCake } from 'react-icons/fa'; // Use correct icons from react-icons

// // const Event = () => {
// //   const [events, setEvents] = useState([]); // State to store events
// //   const [error, setError] = useState(null); // State to store any errors
// //   const [selectedEvent, setSelectedEvent] = useState(null); // State for selected event

// //   useEffect(() => {
// //     // Fetch events from backend
// //     const fetchEvents = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/servicedash');
// //         setEvents(response.data); // Set events in state
// //       } catch (err) {
// //         setError('Failed to fetch events'); // Set error message
// //         console.error(err); // Log error for debugging
// //       }
// //     };

// //     fetchEvents();
// //   }, []);

// //   const handleEventClick = (eventName) => {
// //     setSelectedEvent(eventName);
// //     setTimeout(() => setSelectedEvent(null), 3000); // Hide alert after 3 seconds
// //   };

// //   return (
// //     <div className="container">
// //       <h2>Events</h2>
// //       {error && <p>{error}</p>}
// //       {selectedEvent && <p>You've selected: {selectedEvent}</p>} {/* Alert for selected event */}
// //       {events.length > 0 ? (
// //         <ul>
// //           {events.map((event) => (
// //             <EventCard
// //               key={event._id} // Use the event's unique ID
// //               title={event.eventName}
// //               icon={getIcon(event.eventName)} // Get the appropriate icon based on the event name
// //               description={event.description}
// //               image={event.image} // Ensure your backend sends the image path
// //               onClick={() => handleEventClick(event.eventName)}
// //             />
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>No events found.</p>
// //       )}
// //     </div>
// //   );
// // };

// // const EventCard = ({ title, icon, description, image, onClick }) => {
// //   return (
// //     <li className="bg-white p-4 shadow-lg mb-4 cursor-pointer" onClick={onClick}>
// //       <img src={image} alt={title} className="h-32 w-full object-cover mb-4" />
// //       <div className="mb-4">{icon}</div>
// //       <h3 className="text-xl font-semibold mb-2">{title}</h3>
// //       <p className="mb-4">{description}</p>
// //       <button className="bg-blue-600 text-white p-2 rounded">Book {title}</button>
// //     </li>
// //   );
// // };

// // // Function to return the icon based on the event name
// // const getIcon = (eventName) => {
// //   switch (eventName) {
// //     case "Wedding":
// //       return <Heart className="h-12 w-12 text-pink-500" />;
// //     case "Ceremony":
// //       return <Calendar className="h-12 w-12 text-pink-500" />;
// //     case "Birthday Party":
// //       return <PartyPopper className="h-12 w-12 text-pink-500" />;
// //     case "Anniversary":
// //       return <Gift className="h-12 w-12 text-pink-500" />;
// //     default:
// //       return null;
// //   }
// // };

// // export default Event;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaCalendar, FaGift, FaHeart, FaBirthdayCake } from 'react-icons/fa';

// const Event = () => {
//   const [events, setEvents] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/servicedash');
//         setEvents(response.data);
//       } catch (err) {
//         setError('Failed to fetch events');
//         console.error(err);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleEventClick = (eventName) => {
//     setSelectedEvent(eventName);
//     setTimeout(() => setSelectedEvent(null), 3000);
//   };

//   const handleBookClick = (eventId, eventName) => {
//     sessionStorage.setItem('selectedEvent', eventName); // Save the event name to session storage
//     navigate(`/services`); // Navigate to the booking page
//   };

//   return (
//     <div className="container">
//       <h2>Events</h2>
//       {error && <p>{error}</p>}
//       {selectedEvent && <p>You've selected: {selectedEvent}</p>}
//       {events.length > 0 ? (
//         <ul>
//           {events.map((event) => (
//             <EventCard
//               key={event._id}
//               title={event.eventName}
//               icon={getIcon(event.eventName)}
//               description={event.description}
//               image={event.image}
//               onClick={() => handleEventClick(event.eventName)}
//               onBookClick={() => handleBookClick(event._id, event.eventName)} // Pass event name to the handler
//             />
//           ))}
//         </ul>
//       ) : (
//         <p>No events found.</p>
//       )}
//     </div>
//   );
// };

// const EventCard = ({ title, icon, description, image, onClick, onBookClick }) => {
//   return (
//     <li className="bg-white p-4 shadow-lg mb-4 cursor-pointer" onClick={onClick}>
//       <img src={image} alt={title} className="h-32 w-full object-cover mb-4" />
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="mb-4">{description}</p>
//       <button className="bg-blue-600 text-white p-2 rounded" onClick={onBookClick}>
//         Book {title}
//       </button>
//     </li>
//   );
// };

// const getIcon = (eventName) => {
//   switch (eventName) {
//     case "Wedding":
//       return <FaHeart className="h-12 w-12 text-pink-500" />;
//     case "Ceremony":
//       return <FaCalendar className="h-12 w-12 text-pink-500" />;
//     case "Birthday Party":
//       return <FaBirthdayCake className="h-12 w-12 text-pink-500" />;
//     case "Anniversary":
//       return <FaGift className="h-12 w-12 text-pink-500" />;
//     default:
//       return null;
//   }
// };

// export default Event;


'use client'
'use client'

'use client'

// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify'
// import { Calendar, Gift, Heart, Cake } from 'lucide-react'
// import 'react-toastify/dist/ReactToastify.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// export default function EventPage() {
//   const [events, setEvents] = useState([])
//   const [error, setError] = useState(null)
//   const navigate = useNavigate()

//   // Fetch events from the backend
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/servicedash')
//         setEvents(response.data)
//       } catch (err) {
//         setError('Failed to fetch events')
//         console.error(err)
//       }
//     }

//     fetchEvents()
//   }, [])

//   // Toast notification for event selection
//   const handleEventClick = (eventName) => {
//     toast.success(`You've selected: ${eventName}`, {
//       position: toast.POSITION.TOP_CENTER,
//     })
//   }

//   // Handle navigation to the services page
//   const handleBookClick = (eventId, eventName) => {
//     sessionStorage.setItem('selectedEvent', eventName)
//     navigate('/services')
//   }

//   // Map icons to event names
//   const getIcon = (eventName) => {
//     switch (eventName) {
//       case "Wedding":
//         return <Heart style={{ height: '24px', width: '24px', color: '#921A40' }} />
//       case "Ceremony":
//         return <Calendar style={{ height: '24px', width: '24px', color: '#921A40' }} />
//       case "Birthday Party":
//         return <Cake style={{ height: '24px', width: '24px', color: '#921A40' }} />
//       case "Anniversary":
//         return <Gift style={{ height: '24px', width: '24px', color: '#921A40' }} />
//       default:
//         return null
//     }
//   }

//   return (
//     <div className="container py-5" style={{ backgroundColor: '#F4D9D0' }}>
//       {/* Toast Container */}
//       <ToastContainer />

//       {/* Page Header */}
//       <h1 className="text-center mb-4" style={{ color: '#921A40' }}>Events</h1>

//       {/* Error Message */}
//       {error && <p className="text-danger text-center">{error}</p>}

//       {/* Events Grid */}
//       {events.length > 0 ? (
//         <div className="row g-4">
//           {events.map((event) => (
//             <div key={event._id} className="col-12 col-sm-6 col-lg-3">
//               <div
//                 className="card h-100"
//                 style={{
//                   backgroundColor: '#D9ABAB',
//                   border: '1px solid #C75B7A',
//                   borderRadius: '10px',
//                   overflow: 'hidden',
//                   transition: 'transform 0.3s ease',
//                 }}
//               >
//                 {/* Event Image */}
//                 <img
//                   src={event.image}
//                   alt={event.eventName}
//                   className="card-img-top"
//                   style={{ height: '200px', objectFit: 'cover' }}
//                 />

//                 {/* Event Details */}
//                 <div className="card-body">
//                   <h5 className="card-title d-flex align-items-center gap-2" style={{ color: '#C75B7A' }}>
//                     {getIcon(event.eventName)}
//                     {event.eventName}
//                   </h5>
//                   <p className="card-text">{event.description}</p>
//                 </div>

//                 {/* Card Footer Buttons */}
//                 <div
//                   className="card-footer d-flex justify-content-between"
//                   style={{ backgroundColor: '#F4D9D0' }}
//                 >
//                   <button
//                     className="btn btn-outline-primary"
//                     style={{
//                       borderColor: '#C75B7A',
//                       color: '#C75B7A',
//                     }}
//                     onClick={() => handleEventClick(event.eventName)}
//                   >
//                     Learn More
//                   </button>
//                   <button
//                     className="btn"
//                     style={{
//                       backgroundColor: '#921A40',
//                       color: 'white',
//                       border: 'none',
//                     }}
//                     onClick={() => handleBookClick(event._id, event.eventName)}
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center">No events found.</p>
//       )}
//     </div>
//   )
// }

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import { Calendar, Gift, Heart, Cake, Music, Utensils, Glasses, Users } from 'lucide-react';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { toast, ToastContainer } from 'react-toastify';


// // Import multiple images
// import weddingImage from '/home/uki/Downloads/event aaa/event aa/event/frontend/src/image/wed.jpg';
// import birthdayImage from '/home/uki/Downloads/event aaa/event aa/event/frontend/src/image/birth.jpg';
// import anniversaryImage from '/home/uki/Downloads/event aaa/event aa/event/frontend/src/image/anuversery.jpg';
// import ceremonyImage from '/home/uki/Downloads/event aaa/event aa/event/frontend/src/image/cermony.jpg';

// toast.configure(); // Call this once in your app

// export default function EventPage() {
//   const [events, setEvents] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const [hoveredEventId, setHoveredEventId] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/servicedash');
//         setEvents(response.data);
//       } catch (err) {
//         setError('Failed to fetch events');
//         console.error(err);
//       }
//     };

//     fetchEvents();
//   }, []);

  
//   const handleEventClick = (eventName) => {
//     toast.success(`You've selected: ${eventName}`, {
//       position: toast.POSITION.TOP_CENTER, // Use the correct syntax for toast position
//     });
//   };
  

//   const handleBookClick = (eventId, eventName) => {
//     sessionStorage.setItem('selectedEvent', eventName);
//     navigate('/services');
//   };

//   const getIcon = (eventName) => {
//     switch (eventName.toLowerCase()) {
//       case 'wedding':
//         return <Heart />;
//       case 'ceremony':
//         return <Calendar />;
//       case 'birthday party':
//         return <Cake />;
//       case 'anniversary':
//         return <Gift />;
//       case 'corporate event':
//         return <Users />;
//       case 'dinner party':
//         return <Utensils />;
//       case 'cocktail party':
//         return <Glasses />;
//       case 'concert':
//         return <Music />;
//       default:
//         return null;
//     }
//   };

//   const getImage = (eventName) => {
//     switch (eventName.toLowerCase()) {
//       case 'wedding':
//         return weddingImage;
//       case 'birthday party':
//         return birthdayImage;
//       case 'anniversary':
//         return anniversaryImage;
//       case 'ceremony':
//         return ceremonyImage;
//       case 'corporate event':
//         return corporateImage;
//       case 'dinner party':
//         return dinnerImage;
//       case 'cocktail party':
//         return cocktailImage;
//       case 'concert':
//         return concertImage;
//       default:
//         return weddingImage; // Default image
//     }
//   };

//   return (
//     <div className="event-page" style={{ backgroundColor: '#F4D9D0', minHeight: '100vh', padding: '40px 0' }}>
//       <ToastContainer />

//       <div className="container">
//         <h1 className="text-center mb-5" style={{ color: '#921A40', fontWeight: 'bold', fontSize: '3rem' }}>Exclusive Events</h1>

//         {error && <p className="text-danger text-center">{error}</p>}

//         {events.length > 0 ? (
//           <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
//             {events.map((event) => (
//               <div key={event._id} className="col">
//                 <div
//                   className="card h-100"
//                   style={{
//                     backgroundColor: '#D9ABAB',
//                     border: 'none',
//                     borderRadius: '15px',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                     overflow: 'hidden',
//                     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                     cursor: 'pointer',
//                   }}
//                   onMouseEnter={() => setHoveredEventId(event._id)}
//                   onMouseLeave={() => setHoveredEventId(null)}
//                   onClick={() => handleEventClick(event.eventName)}
//                 >
//                   <div style={{ position: 'relative', overflow: 'hidden' }}>
//                     <img
//                       src={getImage(event.eventName)}
//                       alt={event.eventName}
//                       className="card-img-top"
//                       style={{
//                         height: '200px',
//                         objectFit: 'cover',
//                         transition: 'transform 0.3s ease',
//                         transform: hoveredEventId === event._id ? 'scale(1.1)' : 'scale(1)',
//                       }}
//                     />
//                     <div
//                       style={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         backgroundColor: 'rgba(146, 26, 64, 0.6)',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         opacity: hoveredEventId === event._id ? 1 : 0,
//                         transition: 'opacity 0.3s ease',
//                       }}
//                     >
//                       {getIcon(event.eventName) && React.cloneElement(getIcon(event.eventName), { size: 48, color: 'white' })}
//                     </div>
//                   </div>

//                   <div className="card-body">
//                     <h5 className="card-title text-center" style={{ color: '#921A40', fontWeight: 'bold' }}>
//                       {event.eventName}
//                     </h5>
//                     <p
//                       className="card-text text-center"
//                       style={{
//                         color: '#5A4E4E',
//                         opacity: hoveredEventId === event._id ? 1 : 0,
//                         maxHeight: hoveredEventId === event._id ? '100px' : '0',
//                         overflow: 'hidden',
//                         transition: 'opacity 0.3s ease, max-height 0.3s ease',
//                       }}
//                     >
//                       {event.description}
//                     </p>
//                   </div>

//                   <div
//                     className="card-footer"
//                     style={{
//                       backgroundColor: 'transparent',
//                       borderTop: 'none',
//                       padding: '1rem',
//                     }}
//                   >
//                     <button
//                       className="btn btn-block"
//                       style={{
//                         backgroundColor: '#921A40',
//                         color: 'white',
//                         border: 'none',
//                         borderRadius: '30px',
//                         padding: '0.75rem',
//                         fontSize: '1rem',
//                         fontWeight: 'bold',
//                         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
//                         transition: 'all 0.3s ease',
//                         width: '100%',
//                       }}
//                       onClick={() => handleBookClick(event._id, event.eventName)}
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center" style={{ fontSize: '1.25rem', color: '#5A4E4E' }}>No events found.</p>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';  // Correct import
import { Calendar, Gift, Heart, Cake, Music, Utensils, Glasses, Users } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import multiple images
import weddingImage from '/home/uki/Downloads/event aaa/event aa/event/frontend/src/image/wed.jpg';
import birthdayImage from '/home/uki/Downloads/event aaa/event aa/event/frontend/src/image/birth.jpg';
import anniversaryImage from '/home/uki/Downloads/event aaa/event aa/event/frontend/src/image/anuversery.jpg';
import ceremonyImage from '/home/uki/Downloads/event aaa/event aa/event/frontend/src/image/cermony.jpg';

export default function EventPage() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [hoveredEventId, setHoveredEventId] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/servicedash');
        setEvents(response.data);
      } catch (err) {
        setError('Failed to fetch events');
        console.error(err);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (eventName) => {
    toast.success(`You've selected: ${eventName}`, {
      position: toast.POSITION.TOP_CENTER,  // Correct toast position
    });
  };

  const handleBookClick = (eventId, eventName) => {
    sessionStorage.setItem('selectedEvent', eventName);
    navigate('/services');
    // Refresh the page after the booking is done
    window.location.reload();
  };

  const getIcon = (eventName) => {
    switch (eventName.toLowerCase()) {
      case 'wedding':
        return <Heart />;
      case 'ceremony':
        return <Calendar />;
      case 'birthday party':
        return <Cake />;
      case 'anniversary':
        return <Gift />;
      case 'corporate event':
        return <Users />;
      case 'dinner party':
        return <Utensils />;
      case 'cocktail party':
        return <Glasses />;
      case 'concert':
        return <Music />;
      default:
        return null;
    }
  };

  const getImage = (eventName) => {
    switch (eventName.toLowerCase()) {
      case 'wedding':
        return weddingImage;
      case 'birthday party':
        return birthdayImage;
      case 'anniversary':
        return anniversaryImage;
      case 'ceremony':
        return ceremonyImage;
      default:
        return weddingImage; // Default image
    }
  };

  return (
    <div className="event-page" style={{ backgroundColor: '#F4D9D0', minHeight: '100vh', padding: '40px 0' }}>
      <ToastContainer />  {/* ToastContainer added here for notifications */}

      <div className="container">
        <h1 className="text-center mb-5" style={{ color: '#921A40', fontWeight: 'bold', fontSize: '3rem' }}>Exclusive Events</h1>

        {error && <p className="text-danger text-center">{error}</p>}

        {events.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {events.map((event) => (
              <div key={event._id} className="col">
                <div
                  className="card h-100"
                  style={{
                    backgroundColor: '#D9ABAB',
                    border: 'none',
                    borderRadius: '15px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setHoveredEventId(event._id)}
                  onMouseLeave={() => setHoveredEventId(null)}
                  onClick={() => handleEventClick(event.eventName)}
                >
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={getImage(event.eventName)}
                      alt={event.eventName}
                      className="card-img-top"
                      style={{
                        height: '200px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        transform: hoveredEventId === event._id ? 'scale(1.1)' : 'scale(1)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(146, 26, 64, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: hoveredEventId === event._id ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      {getIcon(event.eventName) && React.cloneElement(getIcon(event.eventName), { size: 48, color: 'white' })}
                    </div>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title text-center" style={{ color: '#921A40', fontWeight: 'bold' }}>
                      {event.eventName}
                    </h5>
                    <p
                      className="card-text text-center"
                      style={{
                        color: '#5A4E4E',
                        opacity: hoveredEventId === event._id ? 1 : 0,
                        maxHeight: hoveredEventId === event._id ? '100px' : '0',
                        overflow: 'hidden',
                        transition: 'opacity 0.3s ease, max-height 0.3s ease',
                      }}
                    >
                      {event.description}
                    </p>
                  </div>

                  <div
                    className="card-footer"
                    style={{
                      backgroundColor: 'transparent',
                      borderTop: 'none',
                      padding: '1rem',
                    }}
                  >
                    <button
                      className="btn btn-block"
                      style={{
                        backgroundColor: '#921A40',
                        color: 'white',
                        border: 'none',
                        borderRadius: '30px',
                        padding: '0.75rem',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                        transition: 'all 0.3s ease',
                        width: '100%',
                      }}
                      onClick={() => handleBookClick(event._id, event.eventName)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center" style={{ fontSize: '1.25rem', color: '#5A4E4E' }}>No events found.</p>
        )}
      </div>
    </div>
  );
}
