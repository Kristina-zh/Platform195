import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Loadable from 'react-loadable';
import HomePage from '../pages/HomePage/HomePage';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import OurWorkPage from '../pages/OurWorkPage/OurWorkPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import Navigation from './Navigation/Navigation';
// import Loader from './Loader/Loader';
import routes from '../routes';
import '../styles.css';

// const AsyncHomePage = Loadable({
//   loader: () =>
//     import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
//   loading: Loader,
//   timeOut: 2000,
//   pathDelay: 300,
// });

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path={routes.HOME} exact component={HomePage} />
        <Route path={routes.ABOUT_US} component={AboutUsPage} />
        <Route path={routes.OUR_WORK} component={OurWorkPage} />
        <Route path={routes.CONTACT} component={ContactPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
