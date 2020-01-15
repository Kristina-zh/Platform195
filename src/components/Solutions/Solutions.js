import React, { Component } from 'react';
import imageBg from '../../img/agency.jpeg';
import s from './Solutions.module.css';

export default class Solutions extends Component {
  state = {
    focused: 0,
  };

  onClick(index) {
    this.setState({ focused: index });
  }

  createMenu() {
    const { items } = this.props;
    let menu = [];
    for (let i = 0; i < items.length; i++) {
      menu.push(
        <a className={s.whiteLink} onClick={() => this.onClick(i)}>
          {items[i].title}
        </a>,
      );
    }
    return menu;
  }

  render() {
    const { focused } = this.state;
    const { items } = this.props;
    return (
      <div className={s.agencyDiv}>
        <img
          className={s.imgBg}
          src={imageBg}
          alt=""
          height="740px"
          width="375px"
        />
        <div className={s.whiteOverlay}>
          <ul className={s.whiteList}>
            <div>{this.createMenu()}</div>
          </ul>
          <p className={s.whiteText}>{items[focused].text}</p>
        </div>
      </div>
    );
  }
}
