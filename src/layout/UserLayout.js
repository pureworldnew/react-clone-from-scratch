import React, { useEffect } from 'react';
import Topnav from '../containers/navs/Topnav';
import Banner from '../containers/navs/Banner';
import Footer from '../containers/navs/Footer';
import RegisterSection from '../components/pages/RegisterSection';
const UserLayout = ({ children }) => {
  useEffect(() => {
    document.body.classList.add('background');
    document.body.classList.add('no-footer');
    return () => {
      document.body.classList.remove('background');
      document.body.classList.remove('no-footer');
    };
  }, []);

  return (
    <>
      <Topnav />
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
