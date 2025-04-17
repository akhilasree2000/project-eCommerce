import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaClone } from 'react-icons/fa';


const CustomNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: "#393280" }} variant="dark" className="py-2">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Left Side - Phone number */}
        <div className="d-flex align-items-center">
          <FaPhoneAlt style={{ color: 'white' }} className="me-2" />
          <span style={{ color: 'white' }}>+91 8374902234</span>
        </div>

        {/* Right Side - Icons */}
        <div className="d-flex align-items-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaTwitter />
          </a>
          {/* Double Square Icon */}
          <FaClone style={{ color: 'white' }} />
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
