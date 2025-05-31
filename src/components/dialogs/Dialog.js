import React from 'react';

const Dialog = ({ open, onClose, children, title }) => {
  if (!open) return null;
  return (
    <div className="dialog-backdrop" style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', zIndex: 1050, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className="dialog-content bg-white rounded shadow p-4" style={{minWidth: 320, maxWidth: 400, position: 'relative'}}>
        {title && <h4 className="mb-3">{title}</h4>}
        {children}
        <button className="btn btn-secondary mt-3" onClick={onClose} autoFocus>Close</button>
      </div>
    </div>
  );
};

export default Dialog;
