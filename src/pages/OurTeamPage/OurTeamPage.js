import React from 'react';
import Team from '../../components/Team/Team';
import members from '../../utils/teamArr';

const OurTeam = () => {
  return (
    <>
      <section className="intro">
        <div className="container">
          <div className="intro__div">
            <h2 className="mainTitle">Our team</h2>
            <p className="introText">Meet the experts behind our company</p>
          </div>
        </div>
      </section>
      <section className="textWrapper">
        <p className="text">
          We're a <span> team of marketing experts </span> that deeply care
          about what we do.
        </p>
        <p className="text">
          Our unique blend of
          <span> technical, creative and international expertise </span>
          guarantees that we have the very best staff ready to make something
          exceptional happen for your brand.
        </p>
        <p className="text">
          With <span> over 25 years </span> of industry experience, our
          leadership team ensures a smooth running of our global operations.
        </p>
        <Team items={members} />
      </section>
    </>
  );
};

export default OurTeam;
