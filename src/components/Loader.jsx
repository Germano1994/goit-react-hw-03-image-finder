import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <div className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default LoadingSpinner;
