import React from 'react';
import Button from '../Button/Button';
import { useStopwatch } from '../../hooks/useWatcher/useWatcher';
import styled from 'styled-components';

const StopWatch = () => {
  const { isRunning, elapsedTime, startTimer, stopTimer, resetTimer } = useStopwatch();

  const handleStartStop = () => {
    isRunning ? stopTimer() : startTimer();
  };

  const handleReset = () => {
    !isRunning && resetTimer();
  };

  return (
    <Wrap>
      <Timer>{elapsedTime}</Timer>
      <ButtonWrap>
        <Button disabled={elapsedTime === '0' || isRunning === true} onClick={handleReset}>
          {'Reset'}
        </Button>
        <Button onClick={handleStartStop} status={isRunning ? 'running' : 'stopped'}>
          {isRunning ? 'Stop' : 'Start'}
        </Button>
      </ButtonWrap>
    </Wrap>
  );
};

const Timer = styled.h1`
  font-size: 18px;
  margin: 0;
  font-weight: normal;
`;

const Wrap = styled.div`
  color: #fff;
  width: 200px;
  margin: auto;
  text-align: center;
  font-family: sans-serif;
  font-size: 18px;
`;

const ButtonWrap = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -12px;
`;

const StopWatchWrap = styled.div`
  display: flex;
`;

export const StopWatchComponent = () => (
  <StopWatchWrap>
    <StopWatch />
  </StopWatchWrap>
);
