import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../img/PLATFORM_195_reversed.jpg';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <div className="container">
        <div className={s.navWrapper}>
          <div>
            <Link to={routes.HOME}>
              <img src={logo} alt="" height="50px" />
            </Link>
          </div>
          <div>
            <ul className={s.list}>
              <li>
                <NavLink
                  exact
                  activeClassName={s.active}
                  className={s.listLink}
                  to={routes.HOME}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName={s.active}
                  className={s.listLink}
                  to={routes.OUR_TEAM}
                >
                  Our team
                </NavLink>
              </li>
              <li>
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

          {/* <Modal>&#9776;</Modal> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
