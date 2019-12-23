import React from 'react';

const Hotels = ({ items }) => {
  return (
    <>
      {/* <ul className={s.itemList}>
        {items.map(el => (
          <li className={s.teamItem} key={`${el.id}`}>
            <picture>
              <img className={s.teamImg} src={el.picture} alt="default" />
              <div className={s.overlay}>
                <div>
                  <h3>{el.name}</h3>
                  <p className={s.teamOccupation}>{el.position}</p>
                  <Box className={s.box} />
                </div>
              </div>
            </picture>
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default Hotels;
