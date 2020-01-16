import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as Burger } from '../../icons/burger.svg';
import s from './Modal.module.css';

export default class Modal extends Component {
  state = {
    isOpen: false,
  };

  toggleDropdown = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  onDropdown = () => {
    this.setState(state => ({ isOpen: state.false }));
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
          <Burger width={20} height={20} />
        </button>

        <CSSTransition
          in={isOpen}
          // timeout={2000}
          // classNames={slideTransition}
          unmountOnExit
        >
          <div className={s.dropdown}>
            <ul className={s.list}>
              <li className={s.listItem}>
                <NavLink
                  exact
                  activeClassName={s.active}
                  className={s.listLink}
                  to={routes.HOME}
                  onClick={this.onDropdown}
                >
                  Home
                </NavLink>
              </li>
              <li className={s.listItem}>
                <NavLink
                  exact
                  activeClassName={s.active}
                  className={s.listLink}
                  to={routes.OUR_TEAM}
                  onClick={this.onDropdown}
                >
                  Our team
                </NavLink>
              </li>
              <li className={s.listItem}>
                <NavLink
                  exact
                  activeClassName={s.active}
                  className={s.listLink}
                  to={routes.OUR_WORK}
                  onClick={this.onDropdown}
                >
                  Our work
                </NavLink>
              </li>
              <li className={s.listItem}>
                <NavLink
                  exact
                  activeClassName={s.active}
                  className={s.listLink}
                  to={routes.CONTACT}
                  onClick={this.onDropdown}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </CSSTransition>
      </section>
    );
  }
}
