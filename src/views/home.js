/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useRef } from 'react';
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { scroller } from 'react-scroll';
import Headroom from 'react-headroom';
import Calendar from 'react-calendar';
import Clock from 'react-clock';
import moment from 'moment';
import { buyUrl, loginRoot } from '../constants/defaultValues';
import Topnav from '../containers/navs/Topnav';

const slideItems = [
  {
    icon: 'iconsminds-mouse-3',
    title: 'Nathaniel Hawthorne',
    detail: 'Time flies over us, but leaves its shadow behind.',
  },
  {
    icon: 'iconsminds-keyboard',
    title: 'Charles F. Kettering',
    detail:
      'You can’t have a better tomorrow if you are thinking about yesterday all the time.',
  },

  {
    icon: 'iconsminds-air-balloon-1',
    title: 'Jonathan Estrin',
    detail: 'The way we spend our time defines who we are.',
  },
  {
    icon: 'iconsminds-resize',
    title: 'Charles Darwin',
    detail:
      'A man who dares to waste one hour of time has not discovered the value of life.',
  },
];

const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const refRowHome = useRef(null);
  const refSectionHome = useRef(null);
  const refSectionFooter = useRef(null);
  const [today, setToday] = useState(
    moment().utcOffset('-22:00', true).toDate()
  );

  return (
    <header className="header">
      <Topnav />
    </header>
  );
};

export default Home;
