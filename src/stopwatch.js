import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startPause = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);

    return {
      hrs: hours.toString().padStart(2, '0'),
      min: minutes.toString().padStart(2, '0'),
      sec: seconds.toString().padStart(2, '0'),
    };
  };

  const { hrs: hrsval, min: minval, sec: secval } = formatTime(time);

  return (
    <div className="stopwatch">
      <div className="timer">
        <span className="hrs">{hrsval}</span>
        <span>:</span>
        <span className="min">{minval}</span>
        <span>:</span>
        <span className="sec">{secval}</span>
      </div>
      <div className="options">
        <button onClick={startPause}>{isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
