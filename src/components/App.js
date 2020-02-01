import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Loader/Loader';
import FirstSlide from './FirstSlide/FirstSlide';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import routes from '../routes';

const AsyncHomePage = Loadable({
  loader: () => import('../pages/HomePage/HomePage'),
  loading: Loader,
});

const AsyncOurTeamPage = Loadable({
  loader: () => import('../pages/OurTeamPage/OurTeamPage'),
  loading: Loader,
});

const AsyncOurWorkPage = Loadable({
  loader: () => import('../pages/OurWorkPage/OurWorkPage'),
  loading: Loader,
});

const AsyncContactPage = Loadable({
  loader: () => import('../pages/ContactPage/ContactPage'),
  loading: Loader,
});

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
        {showSlide && <FirstSlide />}
        {showSlide === false && <Header />}
        {showSlide === false && (
          <Switch>
            <Route path={routes.HOME} exact component={AsyncHomePage} />
            <Route path={routes.OUR_TEAM} component={AsyncOurTeamPage} />
            <Route path={routes.OUR_WORK} component={AsyncOurWorkPage} />
            <Route path={routes.CONTACT} component={AsyncContactPage} />
            <Redirect to="/" />
          </Switch>
        )}
        {showSlide === false && <Footer />}
      </>
    );
  }
}
