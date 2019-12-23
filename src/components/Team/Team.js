import React from 'react';
import { ReactComponent as Box } from '../../icons/linkedin.svg';
import s from '../../pages/OurTeamPage/OurTeamPage.module.css';

const Team = ({ items }) => {
  return (
    <ul className={s.teamList}>
      {items.map(el => (
        <li className={s.teamItem} key={`${el.id}`}>
          <picture>
            <img className={s.teamImg} src={el.picture} alt="default" />
            <div className={s.overlay}>
              <div>
                <h3
                  className="wow animated fadeInUp"
                  data-wow-delay="0.3s"
                  className={s.teamName}
                >
                  {el.name}
                </h3>
                <p className={s.teamOccupation}>{el.position}</p>
                <Box className={s.box} />
              </div>
            </div>
          </picture>
        </li>
      ))}
    </ul>
  );
};

export default Team;
