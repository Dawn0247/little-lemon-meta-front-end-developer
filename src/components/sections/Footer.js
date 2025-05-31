import React from 'react';

const scrollWithOffset = (id) => {
  const yOffset = -70;
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const Footer = () => (
  <footer className="footer bg-dark text-light pt-5 pb-3 mt-5">
    <div className="container">
      <div className="row align-items-start">
        <div className="col-md-3 mb-4 mb-md-0">
          <div className="footer-logo h4 fw-bold mb-3">Little Lemon</div>
        </div>
        <div className="col-md-3 mb-4 mb-md-0">
          <h5 className="fw-bold">Navigation</h5>
          <ul className="list-unstyled">
            <li><a href="#home" className="text-light text-decoration-none" onClick={e => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>Home</a></li>
            <li><a href="#menu" className="text-light text-decoration-none" onClick={e => { e.preventDefault(); scrollWithOffset('menu'); }}>Menu</a></li>
            <li><a href="#booking" className="text-light text-decoration-none" onClick={e => { e.preventDefault(); scrollWithOffset('booking'); }}>Booking</a></li>
            <li><a href="#order" className="text-light text-decoration-none" onClick={e => { e.preventDefault(); scrollWithOffset('order'); }}>Order Online</a></li>
            <li><a href="#about" className="text-light text-decoration-none" onClick={e => { e.preventDefault(); scrollWithOffset('about'); }}>About</a></li>
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
