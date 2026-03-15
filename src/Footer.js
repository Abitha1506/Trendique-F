import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h2>Trendique</h2><br></br>
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Dolore Magna Aliqua.</p><br></br>
          <div className="newsletter">          
              <input type="email" placeholder="Enter Your Email Address" /><br></br><br></br>
              <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-middle">
          <h3>Useful Links</h3>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>

          <h3>Dealership</h3>
          <ul>
            <li>Installer Price Calculator</li>
            <li>Refund Policies</li>
            <li>E-Catalogue</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Customer Support</h3>
          <p>11, Ganapathy Nagar, Mannargudi, Tiruvarur – 614001, Tamil Nadu.</p>
          <p><a href="mailto:abithalenin2004@gmail.com">support@gmail.com</a></p>
          </div>
       </div>

      <div className="footer-bottom">
        <p>&copy;2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;