import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="text-warning mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/report" className="text-light text-decoration-none">Report Animal</Link>
              </li>
              <li className="mb-2">
                <Link to="/ngos" className="text-light text-decoration-none">Find NGOs</Link>
              </li>
              <li className="mb-2">
                <Link to="/donate" className="text-light text-decoration-none">Donate</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-3">
            <h5 className="text-warning mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaPhone className="me-2 text-warning" />
                <a href="tel:+1234567890" className="text-light text-decoration-none">+1 (234) 567-890</a>
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2 text-warning" />
                <a href="mailto:info@petmate.com" className="text-light text-decoration-none">info@petmate.com</a>
              </li>
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2 text-warning" />
                <span>123 Animal Care St, City, Country</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3">
            <h5 className="text-warning mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h5 className="text-warning mb-3">Newsletter</h5>
            <p className="text-light">Subscribe to our newsletter for updates</p>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email" 
                aria-label="Email for newsletter"
              />
              <button className="btn btn-warning" type="button">Subscribe</button>
            </div>
          </div>
        </div>

        <hr className="my-4 bg-light" />

        {/* Copyright */}
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; {currentYear} PetMate. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link to="/privacy" className="text-light text-decoration-none me-3">Privacy Policy</Link>
            <Link to="/terms" className="text-light text-decoration-none">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
