import React from 'react';
import { ReactComponent as Instagram } from '../../icons/instagram.svg';
import { ReactComponent as Linkedin } from '../../icons/linkedin.svg';
import { ReactComponent as Vimeo } from '../../icons/vimeo.svg';
import logo from '../../img/blackMainLogo.jpg';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footerWrapper}>
        <img className={s.logo} src={logo} alt="white logo" height="60px" />
        <ul className={s.socials}>
          <li className={s.socialsItem}>
            <a
              className={s.socialsLink}
              href="https://www.instagram.com/platform_195/?hl=en"
              rel="noreferrer noopener"
            >
              <Instagram width={20} height={20} />
            </a>
          </li>

          <li className={s.socialsItem}>
            <a
              className={s.socialsLink}
              href="https://www.linkedin.com/company/platform-195?trk=public_profile_topcard_current_company"
              rel="noreferrer noopener"
            >
              <Linkedin width={20} height={20} />
            </a>
          </li>
          <li className={s.socialsItem}>
            <a
              className={s.socialsLink}
              href="https://vimeo.com/user80091598"
              rel="noreferrer noopener"
            >
              <Vimeo width={20} height={20} />
            </a>
          </li>
        </ul>
        <button className="button">Contact Us</button>
      </div>
    </div>
  );
};

export default Footer;
