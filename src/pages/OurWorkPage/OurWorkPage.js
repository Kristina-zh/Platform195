import React from 'react';
import s from './OurWork.module.css';

const OurWorkPage = ({ items }) => {
  return (
    <>
      <section className="intro">
        <div className="container">
          <h2 className="mainTitle">Our work</h2>
          <p className="introText">Case Studies</p>
        </div>
      </section>
      <div className="container">
        <section className={s.ourWork}>
          <button className="button">Influencer</button>
          <button className="button">Hotels</button>
          {/* <ul className={s.itemList}>
            {items.map(el => (
              <li className={s.teamItem} key={`${el.id}`}>
                <picture>
                  <img className={s.teamImg} src={el.video} alt="default" />
                  <div className={s.overlay}>
                    <div>
                      <h3>{el.title}</h3>
                      <p className={s.teamOccupation}>{el.type}</p>
                    </div>
                  </div>
                </picture>
              </li>
            ))}
          </ul> */}
        </section>
      </div>
    </>
  );
};

export default OurWorkPage;
