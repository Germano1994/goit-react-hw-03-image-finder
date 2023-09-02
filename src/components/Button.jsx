import React from 'react';

const Button = ({ onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="load-more-button"
    >
      Load More
    </button>
  );
};

export default Button;
