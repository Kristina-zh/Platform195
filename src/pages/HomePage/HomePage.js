import React from 'react';
import { Link } from 'react-router-dom';
import SliderWrapper from '../../components/Slider/Slider';
import OurExperience from '../../components/OurExperience/OurExperience';
import logos from '../../components/OurExperience/logos';
import routes from '../../routes';
import image1 from '../../img/Cuba.png';
import image2 from '../../img/Hotelimg2.png';
import imageBg from '../../img/agency.jpeg';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <div>
        <SliderWrapper />
      </div>
      <section className="container">
        <div className={s.textWrapper}>
          <p className={s.text}>
            We build media platforms and creative solutions that work together
            to deliver <span>successful campaigns</span>. By bringing together
            creative expertise, media solutions and data insight, we ensure our
            projects <span>drive profitability</span>.
          </p>
          <p className={s.text}>
            There is <span>no agency</span> that <span>specialises</span> in
            travel at the scale we do.
          </p>
        </div>
      </section>
      <section className="container">
        <ul className={s.videoList}>
          <li>
            <div className={s.overlayImg}>
              <img
                className={s.img}
                src={image1}
                alt=""
                width="300px"
                // height="293px"
              />
            </div>
            <iframe
              src="https://player.vimeo.com/video/340362775"
              width="300"
              // height="293"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
              margin="0"
            ></iframe>
          </li>
          <li>
            <div className={s.overlayImg}>
              <img src={image2} alt="" width="300px" />
            </div>
            <iframe
              src="https://player.vimeo.com/video/265529409"
              width="300"
              // height="293"
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
      {/* <section className="container">
        <div className={s.agencyDiv}>
          <img className={s.imgBg} src={imageBg} alt="" width="1100px" />
          <div className={s.whiteOverlay}>
            <ul className={s.whiteList}>
              <button className={s.whiteButton}>Media Solutions</button>
              <button className={s.whiteButton}>Creative & Content</button>
              <button className={s.whiteButton}>Technology Integration</button>
            </ul>
            <p>
              We help companies transform their marketing through a suite of
              data-fuelled, multi-channel media solutions powered by our
              cutting-edge technology platform. We help you capture value from
              your owned channels and beyond, whilst activating, optimising and
              reporting on thousands of campaigns at any given time. <br></br>
              <br></br>
              Driving effectiveness, significantly easing team workloads and
              boosting profits. When used in conjunction with our data-informed
              creative opportunities, your marketing moves from functional to
              inspirational and highly effective.
            </p>
          </div>
        </div>
      </section> */}
      {/* <section className="container">
        <h2 className={s.experienceH2}>Our experience</h2>
        <OurExperience logos={logos} />
      </section> */}
    </>
  );
};

export default HomePage;
