import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Card, Carousel } from 'react-bootstrap';
import { FaRing, FaBirthdayCake, FaGlassCheers, FaCamera, FaUtensils, FaPaintBrush, FaMusic, FaAddressCard, FaUsers, FaCar, FaTheaterMasks, FaStar, FaQuoteLeft } from 'react-icons/fa';

const events = [
  { name: "Weddings", icon: <FaRing />, description: "Your perfect day, beautifully planned", image: "/Wedding mandap inspiration ❤️ From @feliz_decor….jpeg"   },
  { name: "Ceremonies", icon: <FaGlassCheers />, description: "Celebrate life's milestones in style", image: "/Established Wedding Sign, Established Sign, Engagement Party Sign, Wedding Backdrop Couple Sign, Two Name Sign, Couple Names Wedding Sign.jpeg"   },
  { name: "Birthday Parties", icon: <FaBirthdayCake />, description: "Make every year count with a bang", image: "/Wedding mandap inspiration ❤️ From @feliz_decor….jpeg"   },
  { name: "Anniversaries", icon: <FaGlassCheers />, description: "Honor your love story", image: "/Established Wedding Sign, Established Sign, Engagement Party Sign, Wedding Backdrop Couple Sign, Two Name Sign, Couple Names Wedding Sign.jpeg" },
];

const services = [
  { name: "Photography and Videography", icon: <FaCamera />, image: "/Wedding mandap inspiration ❤️ From @feliz_decor….jpeg"  },
  { name: "Catering", icon: <FaUtensils />, image: "/Established Wedding Sign, Established Sign, Engagement Party Sign, Wedding Backdrop Couple Sign, Two Name Sign, Couple Names Wedding Sign.jpeg"  },
  { name: "Decor and Theme Design", icon: <FaPaintBrush />,image: "/Wedding mandap inspiration ❤️ From @feliz_decor….jpeg" },
  { name: "Makeup", icon: <FaPaintBrush />,image: "/Established Wedding Sign, Established Sign, Engagement Party Sign, Wedding Backdrop Couple Sign, Two Name Sign, Couple Names Wedding Sign.jpeg"  },
  { name: "Audio-Visual Equipment", icon: <FaMusic />, image: "/Wedding mandap inspiration ❤️ From @feliz_decor….jpeg"  },
  { name: "Card Printing", icon: <FaAddressCard />, image: "/Established Wedding Sign, Established Sign, Engagement Party Sign, Wedding Backdrop Couple Sign, Two Name Sign, Couple Names Wedding Sign.jpeg"  },
  { name: "Guest Management", icon: <FaUsers />, image: "/Wedding mandap inspiration ❤️ From @feliz_decor….jpeg"  },
  { name: "Transportation", icon: <FaCar />, image: "/Established Wedding Sign, Established Sign, Engagement Party Sign, Wedding Backdrop Couple Sign, Two Name Sign, Couple Names Wedding Sign.jpeg"  },
  { name: "Entertainment", icon: <FaTheaterMasks />, image: "/Wedding mandap inspiration ❤️ From @feliz_decor….jpeg"  },
];

const testimonials = [
  { name: "John Doe", text: "Eventura made our wedding day absolutely perfect! Highly recommended!", rating: 5, image: "/These stars are open about the work they've had done.jpeg" },
  { name: "Jane Smith", text: "The team's attention to detail for our corporate event was outstanding.", rating: 5, image: "/Woman Fashion Style.jpeg"},
  { name: "Mike Johnson", text: "Our anniversary celebration was beyond our wildest dreams. Thank you, Eventura!", rating: 5,image: "/66c44ed9-3d1f-4cfe-aa36-2b7847135675.jpeg"},
];

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    eventDate: '',
    event: '',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      console.log('Message sent:', response.data);
      alert('Your message has been submitted successfully!');
      setFormData({ name: '', email: '', address: '', eventDate: '', event: '', comments: '' });
    } catch (error) {
      console.error('Error submitting the form:', error.response ? error.response.data : error.message);
      alert('There was an error submitting your message.');
    }
  };

  return (
    <div style={{ backgroundColor: '#ffe4e1', minHeight: '60vh', display: 'flex', flexDirection: 'column' }}>

      <main style={{ flex: 1 }}>
        <section style={{ 
          backgroundColor: '#FFB6C1', 
          color: 'white', 
          padding: '0.1rem 0', 
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/168d5c0a-a585-4916-9e2e-776071bcccaa.jpeg"
      alt="Elegant Weddings"
      style={{ objectFit: 'cover', height: '600px', color: 'black' }}
    />
    <Carousel.Caption>
      <h3>Elegant Weddings</h3>
      <p>Create memories that last a lifetime</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/A14_Wedding Hall Interior.jpeg"
      alt="Corporate Events"
      style={{ objectFit: 'cover', height: '600px', }}
    />
    <Carousel.Caption>
      <h3>Corporate Events</h3>
      <p>Impress your clients and partners</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/Bianca + Jared - Real Wedding - Weddings in Houston.jpeg"
      alt="Birthday Celebrations"
      style={{ objectFit: 'cover', height: '600px' }}
    />
    <Carousel.Caption>
      <h3>Birthday Celebrations</h3>
      <p>Make every year count</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/Chennai Convention Centre Wedding Hall Photos.jpeg"
      alt="Convention Events"
      style={{ objectFit: 'cover', height: '600px' }}
    />
    <Carousel.Caption>
      <h3>Convention Events</h3>
      <p>Seamlessly organize professional gatherings</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            backgroundColor: 'rgba(146, 26, 64, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Container style={{ position: 'relative', zIndex: 1 }}>
              <Row className="justify-content-center text-center">
                <Col md={8}>
                  <h2 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>Create Unforgettable Moments</h2>
                  <p style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'Merriweather, serif' }}>We specialize in crafting perfect events for all your special occasions</p>
                  <Link to="/events" style={{ 
                    // backgroundColor: '#FFB6C1',
                    backgroundColor: '#e56f6f',
                    backgroundColor: '#8B1F41',
                    color: 'white', 
                    padding: '1rem 2.5rem', 
                    borderRadius: '50px', 
                    textDecoration: 'none', 
                    fontWeight: 'bold',
                    display: 'inline-block',
                    transition: 'all 0.3s',
                    fontSize: '1.2rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    Get Started
                    
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section id="events" style={{ padding: '6rem 0', backgroundColor: 'white' }}>
          <Container>
            <h2 style={{ textAlign: 'center', marginBottom: '4rem', color: '#921A40', fontSize: '3rem', fontFamily: 'Playfair Display, serif' }}>Our Signature Events</h2>
            <Row>
              {events.map((event, index) => (
                <Col key={index} md={6} lg={3} className="mb-4">
                  <Card style={{ height: '100%', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', border: 'none' }}>
                    <Card.Img variant="top" src={event.image} alt={event.name} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                      <div style={{ fontSize: '4rem', color: '#FFB6C1', marginBottom: '1.5rem' }}>{event.icon}</div>
                      <Card.Title style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#921A40', fontFamily: 'Playfair Display, serif' }}>{event.name}</Card.Title>
                      <Card.Text style={{ textAlign: 'center', color: '#666', fontSize: '1.1rem', fontFamily: 'Merriweather, serif' }}>{event.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section id="services" style={{ backgroundColor: '#FFF0F5', padding: '6rem 0' }}>
          <Container>
            <h2 style={{ textAlign: 'center', marginBottom: '4rem', color: '#921A40', fontSize: '3rem', fontFamily: 'Playfair Display, serif' }}>Our Comprehensive Services</h2>
            <Row>
              {services.map((service, index) => (
                <Col key={index} md={4} lg={3} className="mb-4">
                  <Card style={{ height: '100%', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', border: 'none', transition: 'transform 0.3s' }}>
                    <Card.Img variant="top" src={service.image} alt={service.name} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                      <div style={{ fontSize: '3rem', color: '#FFB6C1', marginBottom: '1.5rem' }}>{service.icon}</div>
                      <Card.Title style={{ fontSize: '1.3rem', fontWeight: 'bold', textAlign: 'center', color: '#921A40', fontFamily: 'Playfair Display, serif' }}>{service.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section id="testimonials" style={{ padding: '6rem 0', backgroundColor: 'white' }}>
          <Container>
            <h2 style={{ textAlign: 'center', marginBottom: '4rem', color: '#921A40', fontSize: '3rem', fontFamily: 'Playfair Display, serif' }}>What Our Clients Say</h2>
            <Carousel>
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '2rem' }}
                    />
                    <FaQuoteLeft style={{ fontSize: '3rem', color: '#FFB6C1', marginBottom: '2rem' }} />
                    <p style={{ fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '2rem', fontFamily: 'Merriweather, serif' }}>{testimonial.text}</p>
                    <h3 style={{ color: '#921A40', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>{testimonial.name}</h3>
                    <div>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} style={{ color: '#FFD700', fontSize: '1.5rem' }} />
                      ))}
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </section>

      </main>

    
    </div>
  );
}