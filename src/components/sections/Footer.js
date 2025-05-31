import React from 'react';

const Footer = () => (
  <footer className="footer bg-dark text-light pt-5 pb-3 mt-5">
    <div className="container">
      <div className="row align-items-start">
        <div className="col-md-3 mb-4 mb-md-0">
          <div className="footer-logo h4 fw-bold mb-3">Little Lemon</div>
        </div>
        <div className="col-md-3 mb-4 mb-md-0">
          <h5 className="fw-bold">Doormat Navigation</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light text-decoration-none">Home</a></li>
            <li><a href="#" className="text-light text-decoration-none">About</a></li>
            <li><a href="#" className="text-light text-decoration-none">Menu</a></li>
            <li><a href="#" className="text-light text-decoration-none">Reservations</a></li>
            <li><a href="#" className="text-light text-decoration-none">Order Online</a></li>
            <li><a href="#" className="text-light text-decoration-none">Login</a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-4 mb-md-0">
          <h5 className="fw-bold">Contact</h5>
          <address className="mb-0">
            123 Main St<br />Chicago, IL<br />Phone: (555) 123-4567<br />Email: info@littlelemon.com
          </address>
        </div>
        <div className="col-md-3">
          <h5 className="fw-bold">Social Media</h5>
          <ul className="list-unstyled mb-0">
            <li><a href="#" className="text-light text-decoration-none">Instagram</a></li>
            <li><a href="#" className="text-light text-decoration-none">Facebook</a></li>
            <li><a href="#" className="text-light text-decoration-none">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4 small">&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
