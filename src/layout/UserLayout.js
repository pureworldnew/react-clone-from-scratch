import React, { useEffect } from 'react';
import Topnav from '../containers/navs/Topnav';
import Banner from '../containers/navs/Banner';
import Footer from '../containers/navs/Footer';
import RegisterSection from '../components/pages/RegisterSection';

const UserLayout = ({ children, history }) => {
  return (
    <>
      <Topnav history={history} />
      <Banner />
      <main>
        <div className="container">{children}</div>
      </main>
      <RegisterSection />
      <Footer />
    </>
  );
};

export default UserLayout;
