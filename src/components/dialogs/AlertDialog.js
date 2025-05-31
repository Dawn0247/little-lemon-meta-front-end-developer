import React from 'react';
import Dialog from './Dialog';

const AlertDialog = ({ open, onClose, message, title = 'Alert' }) => (
  <Dialog open={open} onClose={onClose} title={title}>
    <div className="alert-message" style={{ color: '#222', fontSize: 16 }}>
      {message.split('\n').map((line, idx) =>
        line.startsWith('Date:') || line.startsWith('Time:') || line.startsWith('Guests:') || line.startsWith('Name:')
          ? <div key={idx} style={{ margin: '8px 0', fontWeight: 500 }}>{line}</div>
          : <div key={idx}>{line}</div>
      )}
    </div>
  </Dialog>
);

export default AlertDialog;
