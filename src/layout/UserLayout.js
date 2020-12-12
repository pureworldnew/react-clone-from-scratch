import React, { useEffect } from 'react';
import Topnav from '../containers/navs/Topnav';

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
      <div className="fixed-background" />
      <Topnav />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default UserLayout;
