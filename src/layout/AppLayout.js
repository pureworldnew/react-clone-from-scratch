import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Topnav from '../containers/navs/Topnav';
import Banner from '../containers/navs/Banner';
import Footer from '../containers/navs/Footer';
import AppMenu from '../containers/navs/AppMenu';

const AppLayout = ({ children, history, match }) => {
  return (
    <>
      <Topnav history={history} match={match} />
      <Banner history={history} />
      <AppMenu history={history} />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
};
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};
const mapActionToProps = {};

export default withRouter(
  connect(mapStateToProps, mapActionToProps)(AppLayout)
);
