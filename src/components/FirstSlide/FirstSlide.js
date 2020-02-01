import React from 'react';
import logoBlack from '../../assets/img/blackMainLogo.jpg';
import s from './FirstSlide.module.css';

const FirstSlide = () => {
  return (
    <div className={s.firstSlide}>
      <div className={s.firstSlideDiv}>
        <img src={logoBlack} alt="black logo" height="80px" />
        <div className={s.text}>
          <div className={s.textDiv}>
            <hr className={s.textDivHr} />
          </div>
          <p className={s.firstSlideTitle}>where your journey begins</p>
          <div className={s.textDiv}>
            <hr className={s.textDivHr} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
