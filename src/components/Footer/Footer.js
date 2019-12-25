import React from 'react';
import { ReactComponent as Instagram } from '../../icons/instagram.svg';
import { ReactComponent as Linkedin } from '../../icons/linkedin.svg';
import { ReactComponent as Vimeo } from '../../icons/vimeo.svg';
import logo from '../../img/PLATFORM_195_LOGO_white.jpg';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footerWrapper}>
        <img className={s.logo} src={logo} alt="white logo" height="60px" />
        <ul className={s.socials}>
          <li>
            <a
              className={s.socialsLink}
              href="https://www.instagram.com/platform_195/?hl=en"
            >
              <Instagram />
            </a>
          </li>

          <li>
            <a
              className={s.socialsLink}
              href="https://www.linkedin.com/company/platform-195?trk=public_profile_topcard_current_company"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a className={s.socialsLink} href="https://vimeo.com/user80091598">
              <Vimeo />
            </a>
          </li>
        </ul>
        <button className="button">Contact Us</button>
      </div>
    </div>
  );
};

export default Footer;
