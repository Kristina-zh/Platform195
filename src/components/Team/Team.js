import React from 'react';
import Socials from './Socials';
import s from '../../pages/OurTeamPage/OurTeamPage.module.css';

const Team = () => {
  return (
    <>
      <ul>
        <li class={s.item}>
          <Socials />
          <picture>
            {/* <source media="(min-width: 1024px)" srcset="./images/second/1.jpg 1x, ./images/second/1@2x.jpg 2x"> */}
            {/* <source srcset="./images/second/1.jpg, ./images/second/1@2x.jpg 2x"> */}
            <img
              src="./images/second/1.jpg"
              alt="default"
              width="380"
              height="470"
            />
          </picture>

          <h3 class="team__list__title">Matthew Dix</h3>
          <p class="team__list__occupation">Graphic Design</p>
        </li>
      </ul>
    </>
  );
};

export default Team;
