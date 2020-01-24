import React from 'react';
import logoBlack from '../../img/blackMainLogo.jpg';
import s from './FirstSlide.module.css';

const FirstSlide = () => {
  return (
    <div className={s.firstSlide}>
      <div className={s.firstSlideDiv}>
        <img
          className={s.firstSlideLogo}
          src={logoBlack}
          alt="black logo"
          height="100px"
        />
        {/* <div className={s.text}>
          <div className={s.left}>
          <hr className={s.hr} />
          </div> */}
        <p className={s.firstSlideTitle}>where your journey begins</p>
        {/* <div className={s.right}></div>
        </div> */}
      </div>
    </div>
  );
};

export default FirstSlide;
