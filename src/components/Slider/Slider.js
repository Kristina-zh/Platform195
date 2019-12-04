import React, { Component } from 'react';
import s from './Slider.module.css';
import logo1 from '../../img/txt1.png';
import logo2 from '../../img/txt2.png';
import logo3 from '../../img/txt3.png';
import Slideshow from './SlideShow/SlideShow';

const slides = [logo1, logo2, logo3];

export default class Slider extends Component {
  state = {};

  render() {
    return (
      <div className={s.slider}>
        <div className="container">
          <Slideshow className={s.text} slides={slides} />
        </div>
      </div>
    );
  }
}
