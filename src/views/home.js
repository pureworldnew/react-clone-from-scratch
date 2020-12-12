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
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const slideSettings = {
  type: 'carousel',
  gap: 30,
  perView: 4,
  hideNav: true,
  peek: { before: 10, after: 10 },
  breakpoints: {
    600: { perView: 1 },
    992: { perView: 2 },
    1200: { perView: 3 },
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

  return (
    <div>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

export default Home;
