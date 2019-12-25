import React from 'react';
import s from './OurExperience.module.css';

const OurExperience = ({ logos }) => {
  return (
    <ul className={s.teamList}>
      {logos.map(el => (
        <li key={`${el.id}`}>
          <img
            className={s.logoImg}
            src={el.picture}
            alt="default"
            height="120px"
          />
        </li>
      ))}
    </ul>
  );
};

export default OurExperience;
