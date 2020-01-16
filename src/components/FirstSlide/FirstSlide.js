import React from 'react';
import logoBlack from '../../img/blackMainLogo.jpg';
import s from './FirstSlide.module.css';

const FirstSlide = () => {
  return (
    <div className={s.div}>
      <img className={s.logo} src={logoBlack} alt="" height="100px" />
      <div className={s.left}></div>
      <p className={s.title}>where your journey begins</p>
      <div className={s.right}></div>
    </div>
  );
};

export default FirstSlide;
