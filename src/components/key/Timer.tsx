// Timer.tsx

import React, { useEffect } from "react";

interface TimerProps {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const secondsToTime = (seconds: number): string => {
  const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(1, "0"),
    s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");

  return m + ":" + s;
};

const Timer: React.FC<TimerProps> = ({ counter, setCounter }) => {
  useEffect(() => {
    let counterInterval = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 1000);

    return () => clearInterval(counterInterval);
  }, [setCounter]);

  return <div>Time: {secondsToTime(counter)}</div>;
};

export default Timer;