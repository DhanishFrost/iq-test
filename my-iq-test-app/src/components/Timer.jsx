import React, { useEffect, useState } from 'react';

const Timer = ({ isActive, onTimeUpdate, onTimeUp, initialTime = 1800 }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime - 1;
          onTimeUpdate(newTime);
          if (newTime <= 0) {
            clearInterval(interval);
            onTimeUp();
          }
          return newTime;
        });
      }, 1000);
    } else if (!isActive || time <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time, onTimeUpdate, onTimeUp]);

  return (
    <div className="text-right text-gray-700 mb-4">
      Time: {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60} / 30:00
    </div>
  );
};

export default Timer;
