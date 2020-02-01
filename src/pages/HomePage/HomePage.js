import React from 'react';
import { Link } from 'react-router-dom';
import SliderWrapper from '../../components/Slider/Slider';
import OurExperience from '../../components/OurExperience/OurExperience';
import logos from '../../utils/logos';
import routes from '../../routes';
import image1 from '../../assets/img/Cuba.png';
import image2 from '../../assets/img/Hotelimg2.png';
import s from './HomePage.module.css';
import Solutions from '../../components/Solutions/Solutions';
import solutions from '../../utils/solutionsArr';

const HomePage = () => {
  return (
    <>
      <SliderWrapper />
      <section className="textWrapper">
        <p className="text">
          We build <span> media platforms </span> and{' '}
          <span> creative solutions </span> that work together to deliver{' '}
          <span> successful campaigns</span>.
        </p>
        <p className="text">
          By bringing together creative expertise, media solutions and data
          insight, we ensure our projects <span>drive profitability</span>.
        </p>
      </section>
      <section className={s.videoSection}>
        <ul className={s.videoList}>
          <li className={s.videoItem}>
            <div className={s.overlayImg}>
              <img
                src={image1}
                alt=""
                width="290px"
                height="170px"
                objectFit="cover"
              />
            </div>
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/340362775"
              width="290px"
              height="170px"
              frameBorder="0"
              allowFullScreen
            >
              {' '}
            </iframe>
          </li>
          <li className={s.videoItem}>
            <div className={s.overlayImg}>
              <img src={image2} alt="" width="290px" height="170px" />
            </div>
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/265529409"
              width="290px"
              height="170px"
              frameBorder="0"
              allowFullScreen
            >
              {' '}
            </iframe>
          </li>
        </ul>
        <button type="button" className="button">
          <Link className={s.buttonLink} to={routes.OUR_WORK}>
            View More Work
          </Link>
        </button>
      </section>
      <section className={s.solutions}>
        <Solutions items={solutions} />
      </section>
      <section className={s.clients}>
        <div className="container">
          <h2 className={s.experienceH2}>Our experience</h2>
          <OurExperience logos={logos} />
        </div>
      </section>
    </>
  );
};

export default HomePage;
