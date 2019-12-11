import React from 'react';
import s from '../../pages/OurTeamPage/OurTeamPage.module.css';

const Socials = () => {
  return (
    <div class={s.overlay}>
      <button class={s.iconsSocial}>
        <svg height="30" width="30" class="svg-menu">
          <use href="./images/sprite.svg#icon-facebook"></use>
        </svg>
      </button>
      {/* <button class="icons__social">
          <svg height="30" width="30" class="svg-menu"><use href="./images/sprite.svg#icon-twitter"></use></svg>
        </button>
        <button class="icons__social">
          <svg height="30" width="30" class="svg-menu"><use href="./images/sprite.svg#icon-pinterest"></use></svg>
        </button>
        <button class="icons__social">
          <svg height="30" width="30" class="svg-menu"><use href="./images/sprite.svg#icon-instagram"></use></svg>
        </button> */}
    </div>
  );
};

export default Socials;
