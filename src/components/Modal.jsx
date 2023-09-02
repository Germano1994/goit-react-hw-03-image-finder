import React, { useEffect } from 'react';

const Modal = ({ image, onClose }) => {
  
  const handleEscKey = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  
  useEffect(() => {
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <img src={image.largeImageURL} alt={image.id} />
      </div>
    </div>
  );
};

export default Modal;
