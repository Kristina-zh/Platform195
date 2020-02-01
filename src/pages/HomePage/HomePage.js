import React from 'react';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
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
          <span> creative solutions </span> that work together to deliver
          successful campaigns.
        </p>
        <p className="text">
          By bringing together creative expertise, media solutions and data
          insight, we ensure our projects <span>drive profitability</span>.
        </p>
      </section>
      <section className={s.video}>
        <ul className={s.videoList}>
          <li className={s.videoItem}>
            {/* <div className={s.overlayImg}>
              <img src={image1} alt="" width="320px" height="200px" />
            </div> */}
            <Iframe
              url="https://player.vimeo.com/video/340362775"
              className="video"
              min-width="100%"
              min-height="100%"
              id="myId"
              display="initial"
              position="relative"
              outline="none"
            />
          </li>
          <li className={s.videoItem}>
            {/* <div className={s.overlayImg}>
              <img src={image2} alt="" width="320px" height="200px" />
            </div> */}
            <Iframe
              url="https://player.vimeo.com/video/265529409"
              width="100%"
              height="100%"
              id="myId2"
              // display="initial"
              // position="relative"
            />
          </li>
        </ul>
        <button type="button" className="button">
          <Link className={s.buttonLink} to={routes.OUR_WORK}>
            View More Work
          </Link>
        </button>
      </section>
      <Solutions items={solutions} />
      <section className="container">
        <div className={s.clients}>
          <h2 className={s.experienceH2}>Our experience</h2>
          <OurExperience logos={logos} />
        </div>
      </section>
    </>
  );
};

export default HomePage;
