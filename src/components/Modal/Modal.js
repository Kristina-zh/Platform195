import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import s from './Modal.module.css';

export default class Modal extends Component {
  state = {
    isOpen: false,
  };

  toggleDropdown = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <section>
        <button
          type="button"
          className={s.button}
          onClick={this.toggleDropdown}
        >
          &#9776;
        </button>

        <CSSTransition
          in={isOpen}
          // timeout={2000}
          // classNames={slideTransition}
          unmountOnExit
        >
          <div className={s.whiteDrop}>
            <div className={s.whiteDrop}>
              <div>logo</div>
              <h2>Get in touch</h2>
              <p>some text</p>
              <p>contacts</p>
              <u>social icons</u>
            </div>
          </div>
        </CSSTransition>
      </section>
    );
  }
}
