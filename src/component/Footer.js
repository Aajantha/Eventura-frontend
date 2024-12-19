import React from 'react';
import { Container } from 'react-bootstrap'; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#921A40', color: 'white', padding: '2rem 0', textAlign: 'center' }}>
      <Container>
        <p style={{ margin: 0, fontSize: '1.1rem', fontFamily: 'Merriweather, serif' }}>
          © 2024 Eventura. Crafting unforgettable moments, one event at a time.
        </p>
      </Container>
    </footer>
  );
};

export default Footer; 
