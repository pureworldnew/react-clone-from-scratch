import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Topnav from '../containers/navs/Topnav';
import Banner from '../containers/navs/Banner';
import Footer from '../containers/navs/Footer';
import RegisterSection from '../components/pages/RegisterSection';

const AppLayout = ({ children, history }) => {
  return (
    <>
      <Topnav history={history} />
      <Banner />
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
