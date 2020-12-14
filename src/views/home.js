/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useRef } from 'react';
import { buyUrl, loginRoot } from '../constants/defaultValues';
import Topnav from '../containers/navs/Topnav';
import RegisterSection from '../components/pages/RegisterSection';
import Footer from '../containers/navs/Footer';
import HomeBanner from '../containers/navs/HomeBanner';
import HomeContent from '../containers/pages/home/HomeContent';
import AboutContent from '../containers/pages/home/AboutContent';
import ContractorContent from '../containers/pages/home/ContractorContent';
import FaqContent from '../containers/pages/home/FaqContent';
import Banner from '../containers/navs/Banner';
import CalculatorContnet from '../containers/pages/home/CalculatorContent';
import ContactContent from '../containers/pages/home/ContactContent';
import Error from './error';

const Home = ({ match }) => {
  console.log(match);
  console.log('props home page is here', match.path);
  const getContent = (route) => {
    switch (route) {
      case '/':
        return <HomeContent />;
      case '/about':
        return <AboutContent />;
      case '/contractor':
        return <ContractorContent />;
      case '/calculator':
        return <CalculatorContnet />;
      case '/faq':
        return <FaqContent />;
      case '/contact':
        return <ContactContent />;
      default:
        return <Error />;
    }
  };
  const getBanner = (route) => {
    if (route === '/') return <HomeBanner />;
    return <Banner />;
  };
  return (
    <div>
      <Topnav match={match} />
      {getBanner(match.path)}
      {getContent(match.path)}
      <RegisterSection />
      <Footer />
    </div>
  );
};

export default Home;
