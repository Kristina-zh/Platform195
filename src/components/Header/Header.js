import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import blackLogo from '../../assets/img/blackMainLogo.jpg';
import whiteLogo from '../../assets/img/whiteMainLogo.jpg';
import windowWidth from '../../utils/windowWidth';
import routes from '../../routes';
import s from './Header.module.css';

const Header = () => {
  return (
    <nav className={s.nav}>
      <div className="container">
        <div className={s.navWrapper}>
          {windowWidth < 1280 && <Modal />}
          <div>
            <Link to={routes.HOME}>
              {windowWidth >= 1280 && (
                <img src={blackLogo} alt="" height="50px" />
              )}
              {windowWidth < 1280 && (
                <img src={whiteLogo} alt="" height="50px" />
              )}
            </Link>
          </div>
          <div>
            {windowWidth >= 1280 && (
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
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
