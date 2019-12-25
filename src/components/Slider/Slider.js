import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import slider1 from '../../img/slider/slider1.jpg';
import slider2 from '../../img/slider/slider2.jpg';
import slider3 from '../../img/slider/slider3.jpg';

import s from './Slider.module.css';

export default class SliderWrapper extends Component {
  state = {};

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings} autoplay>
        <div className={s.div}>
          <p className={s.text}>
            World-class <span>creativity</span> coupled with{' '}
            <span>cutting edge</span>
          </p>
          <img className={s.image} src={slider1} alt="" width="500px" />
        </div>
        <div className={s.div}>
          <p className={s.text}>
            Data-fuelled <span>technology</span> and{' '}
            <span>media solutions</span>
          </p>
          <img className={s.image} src={slider3} alt="" width="500px" />
        </div>
        <div className={s.div}>
          <p className={s.text}>
            Delivered by a team of people who <span>care passionately</span>{' '}
            about what we do
          </p>
          <img className={s.image} src={slider2} alt="" width="500px" />
        </div>
      </Slider>
    );
  }
}
