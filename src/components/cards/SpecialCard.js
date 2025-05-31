import React from 'react';
import Card from './Card';

const SpecialCard = ({ title, price, description, image, link }) => (
  <Card className="special-card h-100 shadow-sm border-0">
    <div className="special-image mb-3 text-center">
      {image ? (
        <img src={image} alt={title} className="img-fluid rounded" style={{ maxHeight: '180px', objectFit: 'cover' }} />
      ) : (
        <div className="bg-light rounded d-flex align-items-center justify-content-center" style={{ height: '180px', color: '#888' }} role="img" aria-label={`Placeholder image for ${title}`}>
          Image
        </div>
      )}
    </div>
    <div className="special-content px-3 pb-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h3 className="h5 mb-0 fw-bold">{title}</h3>
        <span className="special-price text-warning fw-medium">{price}</span>
      </div>
      <p className="text-muted small" style={{ lineHeight: 1.5, maxWidth: '100%' }}>
        {description}
      </p>
      {link && (
        <a href={link} className="btn btn-outline-success btn-sm mt-2">
          Order a delivery
        </a>
      )}
    </div>
  </Card>
);

export default SpecialCard;
