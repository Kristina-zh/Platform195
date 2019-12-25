import React from 'react';
import { Link } from 'react-router-dom';
import SliderWrapper from '../../components/Slider/Slider';
import OurExperience from '../../components/OurExperience/OurExperience';
import logos from '../../components/OurExperience/logos';
import routes from '../../routes';
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
            <iframe
              src="https://player.vimeo.com/video/340362775"
              width="520"
              height="300"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
              margin="0"
            ></iframe>
          </li>
          <li>
            <iframe
              src="https://player.vimeo.com/video/297954415"
              width="520"
              height="300"
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
      <section className="container">
        <h2 className={s.experienceH2}>Our experience</h2>
        <OurExperience logos={logos} />
      </section>

      {/* <section>
        <h3>Interested in our services? We’re here to help!</h3>
        <p>
          We want to know your needs exactly so that we can provide the perfect
          solution. Let us know what you want and we’ll do our best to help.
        </p>
        <button>Let's conect</button>
      </section> */}
    </>
  );
};

export default HomePage;
