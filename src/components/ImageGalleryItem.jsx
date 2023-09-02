import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img src={image.webformatURL} alt={image.id} />
    </li>
  );
};

export default ImageGalleryItem;
