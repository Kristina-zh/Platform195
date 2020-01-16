import React from 'react';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const LoaderComponent = () => {
  return (
    <div className={s.loader}>
      <Loader
        type="Plane"
        color="white"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default LoaderComponent;
