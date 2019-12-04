import React, { Component } from 'react';
import Slide from '../Slide/Slide';
import Dots from '../Dots/Dots';
import st from './SlideShow.module.css';

const s = {
  container: 'fullW fullH rel overflowH',
  onScreen: 'left0',
  offScreenRight: 'left100vw',
  offScreenLeft: 'leftM100vw',
  transition: 'transition1l',
};

class Slideshow extends Component {
  state = {
    slide: {
      id: 0,
      position: s.onScreen,
      transition: true,
    },
    currentId: 0,
  };

  componentDidMount() {
    this.startCarousel();
  }

  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.transitionSlides();
    }, 3000);
  };

  setSlideState = (slide, currentId) => {
    this.setState({
      slide: slide,
      currentId: currentId,
    });
  };

  transitionSlides = () => {
    const { slide } = this.state;
    let currentId;
    if (slide['position'] === s.onScreen) {
      slide['position'] = s.offScreenLeft;
      currentId = slide.id;
    } else {
      slide['position'] = s.onScreen;
      currentId = slide.id;
    }
    this.setSlideState(slide, currentId);
    setTimeout(() => {
      this.resetSlideOffScreen();
    }, 1000);
  };

  resetSlideOffScreen = () => {
    const { slide, currentId } = this.state;
    const { slides } = this.props;
    if (slide['position'] === s.offScreenLeft) {
      slide['transition'] = false;
      slide['position'] = s.offScreenRight;
      slide['id'] = slide.id + 1 === slides.length ? 0 : slide.id + 1;
    }

    this.setSlideState(slide, currentId);
    this.resetSlideTransitions(slide, currentId);
  };

  resetSlideTransitions = (slide, currentId) => {
    setTimeout(() => {
      slide['transition'] = true;
      this.setSlideState(slide, currentId);
    }, 500);
  };

  render() {
    const { slide, currentId } = this.state;
    const { slides } = this.props;
    return (
      <div className={s.text}>
        <Slide
          image={slides[slide.id]}
          position={slide.position}
          transition={slide.transition ? s.transition : ''}
        />
        <Dots slideId={currentId} slides={slides} />
      </div>
    );
  }
}

export default Slideshow;
