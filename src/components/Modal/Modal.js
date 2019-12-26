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

  render() {
    const { isOpen } = this.state;

    return (
      <section>
        <button
          type="button"
          className={s.button}
          onClick={this.toggleDropdown}
        >
          <Burger />
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
                >
                  Our work
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName={s.active}
                  className={s.listLink}
                  to={routes.CONTACT}
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
