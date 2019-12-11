import React from 'react';
import Team from '../../components/Team/Team';
import s from './OurTeamPage.module.css';

const OurTeam = () => {
  return (
    <>
      <section className={s.intro}>
        <div className="container">
          <h2>Our team</h2>
          <p className={s.introText}>Meet the experts behind our company</p>
        </div>
      </section>
      <div className="container">
        <section>
          <div className={s.textWrapper}>
            <p className={s.text}>
              We see big potential and care deeply about what we do every day.
              Our unique blend of <span>technical</span>, <span>creative</span>{' '}
              and <span>international expertise</span> guarantees that we have
              the very best staff all over the world and at every level of our
              organisation.
            </p>
            <p className={s.text}>
              <span>Our leadership team</span> lead a breadth and depth of
              experience across the company.
            </p>
          </div>
          <Team />
        </section>
      </div>
    </>
  );
};

export default OurTeam;
