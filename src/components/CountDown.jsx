import React, { useState, useEffect } from "react";

const CountDown = ({ time, onEnd, ...props }) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    setTimer(time);
  }, [time]);

  useEffect(() => {
    if (timer > 0) {
      const timerID = setInterval(() => tick(), 1000);

      return () => {
        clearInterval(timerID);
      };
    } else if (!!onEnd) onEnd();
  });

  function tick() {
    setTimer(timer - 1);
  }

  return <span {...props}>{timer}</span>;
};

export default CountDown;
