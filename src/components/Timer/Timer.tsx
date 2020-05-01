// @ts-nocheck
import React, { useState, useEffect } from 'react';
import './timer.css';

const Timer = ({ func, func2, func3 }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    func(seconds);
    func2(!isActive);
    func3(minutes);
    setIsActive(!isActive);
  }

  function plusMinutes() {
    setMinutes(minutes + 1);
  }

  function substractMinutes() {
    if (minutes >= 1) {
      setMinutes(minutes - 1);
    }
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && minutes >= 0) {
      interval = setInterval(() => {
        if (Number.isInteger(seconds / 60) && minutes >= 1) {
          setMinutes(minutes - 1);
          setSeconds(seconds => seconds + 59);
        }
        if (seconds >= 1) {
          setSeconds(seconds => seconds - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  return (
    <div>
      <div className="app">
        <div className="time">
          {minutes}m : {seconds}s
        </div>
        <button className="button" onClick={plusMinutes}>
          +
        </button>
        <button className="button" onClick={substractMinutes}>
          -
        </button>
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
