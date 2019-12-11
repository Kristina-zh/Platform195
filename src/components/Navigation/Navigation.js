import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import logo from '../../img/PLATFORM_195_reversed.jpg';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <div className="container">
        <div className={s.navWrapper}>
          <Link to={routes.HOME}>
            <img src={logo} alt="" height="50px" />
          </Link>

          <ul className={s.list}>
            <li>
              <NavLink exact activeClassName={s.active} to={routes.HOME}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName={s.active} to={routes.OUR_TEAM}>
                Our team
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName={s.active} to={routes.OUR_WORK}>
                Our work
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName={s.active} to={routes.CONTACT}>
                Contact
              </NavLink>
            </li>
          </ul>
          <Modal>&#9776;</Modal>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
