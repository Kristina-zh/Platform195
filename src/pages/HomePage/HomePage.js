import React from 'react';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';
import SliderWrapper from '../../components/Slider/Slider';
import OurExperience from '../../components/OurExperience/OurExperience';
import logos from '../../components/OurExperience/logos';
import routes from '../../routes';
import image1 from '../../img/Cuba.png';
import image2 from '../../img/Hotelimg2.png';
import video1 from '../../videos/1356435001.mp4';
import video2 from '../../videos/981891778.mp4';
// import 'node_modules/video-react/dist/video-react.css';
import s from './HomePage.module.css';
import Solutions from '../../components/Solutions/Solutions';
import solutions from '../../components/Solutions/solutionsArr';

const HomePage = () => {
  return (
    <>
      <SliderWrapper />
      <section className="container">
        <div className={s.textWrapper}>
          <p className={s.text}>
            We build <span> media platforms </span> and{' '}
            <span> creative solutions </span> that work together to deliver
            successful campaigns.
          </p>
          <p className={s.text}>
            By bringing together creative expertise, media solutions and data
            insight, we ensure our projects <span>drive profitability</span>.
          </p>
        </div>
      </section>
      <section className={s.video}>
        <ul className={s.videoList}>
          <li className={s.videoItem}>
            <div className={s.overlayImg}>
              <img src={image1} alt="" width="360px" height="200px" />
            </div>
            <iframe
              src="https://player.vimeo.com/video/340362775"
              width="400"
              height="200"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </li>
          {/* <Player
            // playsInline
            // poster={image1}
            src={video1}
            width="320px"
            height="170px"
          /> */}
          <li className={s.videoItem}>
            <div className={s.overlayImg}>
              <img src={image2} alt="" width="360px" height="200px" />
            </div>
            <iframe
              src="https://player.vimeo.com/video/265529409"
              width="400"
              height="200"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
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
