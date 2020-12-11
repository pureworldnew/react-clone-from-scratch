/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useRef } from 'react';

import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { scroller } from 'react-scroll';
import Headroom from 'react-headroom';
import Calendar from 'react-calendar';
import Clock from 'react-clock';
import moment from 'moment';
import GlideComponent from '../components/carousel/GlideComponent';
import { buyUrl, loginRoot } from '../constants/defaultValues';
import CountDownTimer from '../components/CountDownTimer';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const slideSettings = {
  type: 'carousel',
  gap: 30,
  perView: 4,
  hideNav: true,
  peek: { before: 10, after: 10 },
  breakpoints: {
    '600': { perView: 1 },
    '992': { perView: 2 },
    '1200': { perView: 3 },
  },
};

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

const accounts = [
  {
    detail: `Develop a passion for learning. If you do, you will never cease to grow`,
  },
  {
    detail: `Passion is energy. Feel the power that comes from focusing on what excites you`,
  },
  {
    detail: `Nothing is as important as passion. No matter what you want to do with your life, be passionate`,
  },
  {
    detail: `You can't fake passion`,
  },
  {
    detail: `You have to be burning with an idea, or a problem, or a wrong that you want to right. If you're not passionate enough from the start, you'll never stick it out`,
  },
  {
    detail: `Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.`,
  },
];
const projects = [
  {
    detail: 'Life is like a tango; fortunate are the few who can master it',
  },
  {
    detail: `A challenging task seems more difficult when it should be
    completed urgently. And it’s true! So brain should be under
    control as we take care of our hands`,
  },
  {
    detail: `Schooling doesn't assure employment but skill does`,
  },
  {
    detail: `The best yardstick for our progress is not other people, but
    ourselves. Am I better than I was yesterday? This is the
    only question worth asking. As long as you go to bed at
    night a better practitioner than the one who woke up that
    morning, you have succeeded. Your worth should have nothing
    to do with how your progress stacks up relative to another`,
  },
];

const clients = [
  {
    detail: `We are most alive when we're in love`,
  },
  {
    detail: `The best and most beautiful things in the world cannot be
    seen or even heard, but must be felt with the heart`,
  },
  {
    detail: `Love cures people—both the ones who give it and the ones
    who receive it`,
  },
  {
    detail: `True love is not a hide-and-seek game; in true love, both
    lovers seek each other`,
  },
  {
    detail: `The most important thing in life is to learn how to give
    out love, and to let it come in`,
  },
];

const times = [
  {
    detail: `Time is what we want most, but what we use worst.`,
  },
  {
    detail: `If you love life, don’t waste time, for time is what life is
  made up of.`,
  },
  {
    detail: `You can’t make up for lost time. You can only do better in
  the future`,
  },
  {
    detail: `Regret for wasted time is more wasted time`,
  },
  {
    detail: `If you want to live a happy life, tie it to a goal, not to
  people or things`,
  },
];
const wallets = [
  {
    detail: `The rich invest in time, the poor invest in money`,
  },
  {
    detail: `The more you learn, the more you earn`,
  },
  {
    detail: `Rich people believe “I create my life”. Poor people believe “Life happens to me”`,
  },
  {
    detail: `Earn with your mind, not your time`,
  },
  {
    detail: `My favorite things in life don’t cost any money. It’s really clear that the most precious resource we all have is time`,
  },
  {
    detail: `Trade money for time, not time for money. You’re going to run out of time first`,
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

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onWindowClick);

    document.body.classList.add('no-footer');
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('click', onWindowClick);
      document.body.classList.remove('no-footer');
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setToday(moment().utcOffset('-22:00', true).toDate()),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  const onWindowResize = (event) => {
    const homeRect = refRowHome.current.getBoundingClientRect();

    const homeSection = refSectionHome.current;
    homeSection.style.backgroundPositionX = `${homeRect.x - 580}px`;

    const footerSection = refSectionFooter.current;
    footerSection.style.backgroundPositionX = `${
      event.target.innerWidth - homeRect.x - 2000
    }px`;

    if (event.target.innerWidth >= 992) {
      setShowMobileMenu(false);
    }
  };

  const onWindowClick = () => {
    setShowMobileMenu(false);
  };

  const onWindowScroll = () => {
    setShowMobileMenu(false);
  };

  const scrollTo = (event, target) => {
    event.preventDefault();
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,
    });
    return false;
  };

  const onChange = (date) => {
    setToday(date);
  };

  return (
    <div
      className={classnames('landing-page', {
        'show-mobile-menu': showMobileMenu,
      })}
    >
      <div className="mobile-menu" onClick={(event) => event.stopPropagation()}>
        <a
          className="logo-mobile c-pointer"
          href="#scroll"
          onClick={(event) => scrollTo(event, 'home')}
        >
          <span />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'accounts')}
            >
              ACCOUNTS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'projects')}
            >
              PROJECTS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'clients')}
            >
              CLIENTS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'times')}
            >
              TIME
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'themes')}
            >
              WALLET
            </a>
          </li>
          <li className="nav-item">
            <div className="separator" />
          </li>
          <li className="nav-item text-center">
            <a
              className="btn btn-outline-primary btn-sm mobile-menu-cta"
              rel="noopener noreferrer"
              href={loginRoot}
            >
              LOGIN
            </a>
          </li>
        </ul>
      </div>

      <div className="main-container">
        <Headroom className="landing-page-nav">
          <nav>
            <div className="container d-flex align-items-center justify-content-between">
              <a
                className="navbar-logo pull-left c-pointer"
                href="#scroll"
                onClick={(event) => scrollTo(event, 'home')}
              >
                <span className="white" />
                <span className="dark" />
              </a>
              <ul className="navbar-nav d-none d-lg-flex flex-row">
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'accounts')}
                  >
                    ACCOUNTS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'projects')}
                  >
                    PROJECTS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'clients')}
                  >
                    CLIENTS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'times')}
                  >
                    TIME
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'themes')}
                  >
                    WALLET
                  </a>
                </li>
                <li className="nav-item pl-4">
                  <a
                    className="btn btn-outline-semi-light btn-sm pr-4 pl-4"
                    rel="noopener noreferrer"
                    href={loginRoot}
                  >
                    LOGIN
                  </a>
                </li>
              </ul>
              <span
                className="mobile-menu-button"
                onClick={(event) => {
                  setShowMobileMenu(!showMobileMenu);
                  event.stopPropagation();
                }}
              >
                <i className="simple-icon-menu" />
              </span>
            </div>
          </nav>
        </Headroom>
        <div className="content-container" id="home">
          <div className="section home" ref={refSectionHome}>
            <div className="container">
              <div className="row home-row" ref={refRowHome}>
                <div className="col-12 d-block d-md-none">
                  <NavLink to="/">
                    <img
                      alt="mobile hero"
                      className="mobile-hero"
                      src="/assets/img/landing-page/home-hero-mobile.png"
                    />
                  </NavLink>
                </div>

                <div className="col-12 col-xl-4 col-lg-5 col-md-6">
                  <div className="home-text">
                    <div className="display-1">
                      Success usually comes to those who are too busy to be
                      looking for it
                    </div>
                    <p className="white mb-5">
                      The time I kill is killing me
                      <br />
                      <br />
                      There are two types of people who will tell you that you
                      cannot make a difference in this world: <br />
                      those who are afraid to try and those who are afraid you
                      will succeed
                      <br />
                      <br />
                      Would you like me to give you a formula for success? It's
                      quite simple, really: Double your rate of failure. You are
                      thinking of failure as the enemy of success. But it isn't
                      at all. You can be discouraged by failure or you can learn
                      from it, so go ahead and make mistakes. Make all you can.
                      Because remember that's where you will find success <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-6  d-none d-md-block">
                  <NavLink to={loginRoot}>
                    <CountDownTimer />
                  </NavLink>
                  <div className="d-flex justify-content-between align-items-center">
                    <Calendar onChange={onChange} value={today} />
                    <Clock value={today} className="clockSize" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 p-0">
                  <div className="home-carousel">
                    <GlideComponent settings={slideSettings}>
                      {slideItems.map((f, index) => (
                        <div key={`slide_${index}`} className="card">
                          <div className="card-body text-center">
                            <div>
                              <i className={`${f.icon} large-icon`} />
                              <h5 className="mb-3 font-weight-semibold">
                                {f.title}
                              </h5>
                            </div>
                            <div>
                              <p className="detail-text">{f.detail}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </GlideComponent>
                  </div>
                </div>
              </div>

              <div className="row">
                <a
                  className="btn btn-circle btn-outline-semi-light hero-circle-button"
                  href="#scroll"
                  onClick={(event) => scrollTo(event, 'accounts')}
                >
                  <i className="simple-icon-arrow-down" />
                </a>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="container" id="accounts">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Account Management</h1>
                  <p>
                    Account Management is consist of Freelancer Account & Client
                    Account & Recruiter Account creation and maintenance
                  </p>
                  {accounts.map((account, index) => (
                    <p key={index}>{account.detail}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="section background">
            <div className="container" id="projects">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Projects Management</h1>
                  <p>Project Bid &amp; Project Completion</p>
                  <br />
                  <div>
                    {projects.map((project, index) => (
                      <p key={index}>{project.detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section mb-0">
            <div className="container" id="clients">
              <div className="row mb-5">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Clients Management</h1>
                  <p>
                    Management of Clients for Account and Project
                    <br />
                    <br />
                  </p>
                  {clients.map((client, index) => (
                    <p key={index}>{client.detail}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="section background">
            <div className="container" id="times">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center mb-4">
                  <h1>Time Management</h1>
                  {times.map((time, index) => (
                    <p key={index}>{time.detail}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="section mb-0">
            <div className="container" id="themes">
              <div className="row mb-5">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Wallet</h1>
                  <p>Wallet Management</p>
                  {wallets.map((wallet, index) => (
                    <p key={index}>{wallet.detail}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="section background background-no-bottom mb-0 pb-0">
            <div className="container">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>
                    You only live once, but if you do it right, once is enough
                  </h1>
                  <p>
                    Many of life’s failures are people who did not realize how
                    close they were to success when they gave up
                  </p>
                </div>
                <div className="col-12 offset-0 col-lg-6 offset-lg-3 newsletter-input-container">
                  <div className="text-center mb-3">
                    <a
                      className="btn btn-secondary btn-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={buyUrl}
                    >
                      Start Your Day
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section footer mb-0" ref={refSectionFooter}>
            <div className="container">
              <div className="row footer-row">
                <div className="col-12 text-right">
                  <a
                    className="btn btn-circle btn-outline-semi-light footer-circle-button c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    <i className="simple-icon-arrow-up" />
                  </a>
                </div>
                <div className="col-12 text-center footer-content">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    <img
                      className="footer-logo"
                      alt="footer logo"
                      src="/assets/logos/white-full.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="container copyright pt-5 pb-5">
              <div className="row">
                <div className="col-12" />
                <div className="col-12 text-center">
                  <p className="mb-0">2020.09.16 © CrmOnlineGems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
