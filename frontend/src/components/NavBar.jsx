import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is available

const AppNavbar = () => {
  // Placeholder click handlers (or use React Router Links later)
  const handleNavClick = (page) => {
    console.log(`Navigate to ${page}...`);
    // Example with React Router: navigate(`/${page.toLowerCase()}`);
  };

  return (
    <Navbar bg="warning" variant="light" expand="lg" sticky="top">
      <Container>
        {/* Brand on the left */}
        <Navbar.Brand href="#home" style={{ fontWeight: 'bold' }}>
          PetMate
        </Navbar.Brand>

        {/* Hamburger Toggle for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Links on the right (ms-auto pushes them) */}
          <Nav className="ms-auto">
            <Nav.Link href="#about" onClick={() => handleNavClick('About Us')}>
              About Us
            </Nav.Link>
            <Nav.Link href="#donate" onClick={() => handleNavClick('Donate')}>
              Donate
            </Nav.Link>
            <Nav.Link href="#services" onClick={() => handleNavClick('Services')}>
              Services
            </Nav.Link>
            {/* Add more links as needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar; // Use a different name like AppNavbar to avoid conflict with react-bootstrap's Navbar