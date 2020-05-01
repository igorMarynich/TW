//@ts-nocheck
import React, { useState, useEffect } from 'react';
import ParticipantStrip from '../ParticipantStrip/ParticipantStrip';
import { styled } from '@material-ui/core/styles';
import MainParticipant from '../MainParticipant/MainParticipant';
import Slides from '../Slides/Slides';
import { ChatBox } from '../ChatBox/ChatBox';
import { StopWatchComponent } from '../Stopwatch/Stopwatch';
import Chat from '../Chat/Chat';
import Timer from '../Timer/Timer';
import MicVolume from '../ MicVolume/MicVolume';
import MusicVolume from '../MusicVolume/MusicVolume';
import PopUp from '../PopUp/PopUp';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import UploadButton from '../UploadButton/UploadButton';
import { SecondsContext } from '../SecondsContext/SecondsContext';

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '100%',
  display: 'grid',
  width: '80%',
  // gridTemplateColumns: `${theme.sidebarWidth}px 1fr 1fr 1fr 1fr`,
  gridTemplateColumns: `1fr 1fr 1fr 1fr 1fr`,
  gridTemplateRows: `min-content min-content min-content min-content min-content`,
  gridTemplateAreas: '"participantList"',
  [theme.breakpoints.down('xs')]: {
    gridTemplateAreas: '"participantList" "."',
    gridTemplateColumns: `auto`,
    gridTemplateRows: `calc(100% - ${theme.sidebarMobileHeight + 12}px) ${theme.sidebarMobileHeight + 6}px`,
    gridGap: '6px',
  },
}));

const useStyles = makeStyles(() =>
  createStyles({
    buttonWrapper: {
      textAlign: 'center',
      width: '100%',
      position: 'relative',
      top: '20px',
    },
    button: {
      padding: '15px',
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  })
);

const MainContainer = styled('div')(() => ({
  display: 'flex',
}));

const MainParticipantContainer = styled('div')(() => ({
  gridColumn: '2 / 4',
  gridRow: '1 / 3',
}));

const SlidesContainer = styled('div')(() => ({
  gridColumn: '4 / 6',
  gridRow: '1 / 3',
}));

export default function Room() {
  const classes = useStyles();
  const [counter, setCounter] = useState(false);
  const [mainSeconds, setMainSeconds] = useState(0);
  const [mainMinutes, setMainMinutes] = useState(0);
  const [mainIsActive, setMainIsActive] = useState(false);

  const secondsParticipant = seconds => {
    setMainSeconds(seconds);
  };

  const timerParticipant = isActive => {
    setMainIsActive(isActive);
  };

  const minutesParticipant = minutes => {
    setMainMinutes(minutes);
  };

  return (
    <SecondsContext.Provider value={{ mainSeconds, mainMinutes, mainIsActive }}>
      <MainContainer>
        <Container>
          <ParticipantStrip />
          <MainParticipantContainer>
            <MainParticipant />
          </MainParticipantContainer>
          <SlidesContainer>
            {/* <Slides /> */}
            <UploadButton />
          </SlidesContainer>
          <ParticipantStrip />

          <MicVolume />
          <MusicVolume />
          {counter ? (
            <Timer func={secondsParticipant} func2={timerParticipant} func3={minutesParticipant} />
          ) : (
            <StopWatchComponent />
          )}
          {/* {<h1>Count: {setInterval(testFunc,1000)} : {timerIsActive.toString()}</h1>} */}
          <PopUp />
          <Button color="default" onClick={() => setCounter(!counter)} className={classes.button}>
            {counter ? 'Timer' : 'StopWatch'}
          </Button>
        </Container>
        <Chat />
      </MainContainer>
    </SecondsContext.Provider>
  );
}
