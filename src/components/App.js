import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Loadable from 'react-loadable';
import HomePage from '../pages/HomePage/HomePage';
import OurTeamPage from '../pages/OurTeamPage/OurTeamPage';
import OurWorkPage from '../pages/OurWorkPage/OurWorkPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
// import FirstSlide from './FirstSlide/FirstSlide';
// import Loader from './Loader/Loader';
import routes from '../routes';
import videos from '../pages/OurWorkPage/videos';

import '../styles.css';
import FirstSlide from './FirstSlide/FirstSlide';

// const AsyncHomePage = Loadable({
//   loader: () =>
//     import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
//   loading: Loader,
//   timeOut: 2000,
//   pathDelay: 300,
// });

export default class App extends Component {
  state = {
    showSlide: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showSlide: false });
    }, 300);
  }

  render() {
    const { showSlide } = this.state;
    return (
      <>
        <Navigation />
        {showSlide && <FirstSlide />}
        <Switch>
          <Route path={routes.HOME} exact component={HomePage} />
          <Route path={routes.OUR_TEAM} component={OurTeamPage} />
          <Route
            path={routes.OUR_WORK}
            component={OurWorkPage}
            items={videos}
          />
          <Route path={routes.CONTACT} component={ContactPage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </>
    );
  }
}
