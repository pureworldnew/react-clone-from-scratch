/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';

const CountDownTimer = () => {
  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-09-25`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());
  const [month] = useState(new Date().getMonth() + 1);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });
  return (
    <div className="text-white">
      <h1>Stay hungry ,Stay foolish</h1>
      <h2>
        {year}, {month} CountDown
      </h2>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default CountDownTimer;
