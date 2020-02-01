import React from 'react';
import { ReactComponent as Box } from '../../assets/icons/linkedin.svg';
import s from '../../pages/OurTeamPage/OurTeamPage.module.css';

const Team = ({ items }) => {
  return (
    <section className={s.teamSection}>
      <ul className={s.teamList}>
        {items.map(el => (
          <li className={s.teamItem} key={`${el.id}`}>
            <picture>
              <img className={s.teamImg} src={el.picture} alt="default" />
              <div className={s.overlay}>
                <div>
                  <h3
                    // data-wow-delay="0.3s"
                    className={s.teamName}
                  >
                    {el.name}
                  </h3>
                  <p className={s.teamOccupation}>{el.position}</p>
                  <a href={el.link}>
                    <Box className={s.box} />
                  </a>
                </div>
              </div>
            </picture>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Team;
