import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={styles.ImageGallery}>
    {images.map((image) => (
      <li key={image.id} className={styles.ImageGalleryItem}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={styles.ImageGalleryItemImage}
          onClick={() => onImageClick(image)}
        />
      </li>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
