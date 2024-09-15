import React from 'react';
import './Footer.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Teddy Store is the best place to find your favorite cuddly companions. We offer a wide
            range of soft toys to make your day special.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">All Products</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@teddystore.com</p>
          <p>Phone: 6367516329</p>
        </div>
        
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={{color: "#fff", paddingRight: "6px", fontSize: "18px"}}/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter style={{color: "#fff", paddingRight: "6px", fontSize: "18px"}}/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{color: "#fff", fontSize: "18px"}} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Teddy Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
