import React from 'react';
import s from './OurWork.module.css';

const OurWorkPage = ({ items }) => {
  return (
    <>
      <section className="intro">
        <div className="container">
          <div className="intro__div">
            <h2 className="mainTitle">Our work</h2>
            <p className="introText">Case Studies</p>
          </div>
        </div>
      </section>
      <section className="videoSection">
        <ul className="videoList">
          <li className="videoItem">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/340362775"
              width="290px"
              height="170px"
              frameBorder="0"
              allowFullScreen
            >
              {' '}
            </iframe>
          </li>
          <li className="videoItem">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/336578815"
              width="290px"
              height="170px"
              frameBorder="0"
              allowFullScreen
            >
              {' '}
            </iframe>
          </li>
          <li className="videoItem">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/338274329"
              width="290px"
              height="170px"
              frameBorder="0"
              allowFullScreen
            >
              {' '}
            </iframe>
          </li>
          <li className="videoItem">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/321269527"
              width="290px"
              height="170px"
              frameBorder="0"
              allowFullScreen
            >
              {' '}
            </iframe>
          </li>
          <li className="videoItem">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/303005579"
              width="290px"
              height="170px"
              frameBorder="0"
              allowFullScreen
            >
              {' '}
            </iframe>
          </li>
          <li className="videoItem">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/297954415"
              width="290px"
              height="170px"
              frameBorder="0"
              allowFullScreen
            >
              {' '}
            </iframe>
          </li>
          <li className="videoItem">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/265529409"
              width="290px"
              height="170px"
              frameBorder="0"
              allowFullScreen
            >
              {' '}
            </iframe>
          </li>
          <li className="videoItem">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/376828353"
              width="290px"
              height="170px"
              frameBorder="0"
              allowFullScreen
            >
              {' '}
            </iframe>
          </li>
          <li className="videoItem">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/265396390"
              width="290px"
              height="170px"
              frameBorder="0"
              allowFullScreen
            >
              {' '}
            </iframe>
          </li>
        </ul>
      </section>
    </>
  );
};

export default OurWorkPage;
