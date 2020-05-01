import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TimerIcon from '@material-ui/icons/Timer';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

// import useVideoContext from '../../../hooks/useVideoContext/useVideoContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(1),
    },
  })
);

export default function TimerButton() {
  const classes = useStyles();
  //   const { room } = useVideoContext();

  return (
    <Tooltip
      title={'Timer'}
      // onClick={() => room.disconnect()}
      placement="top"
      PopperProps={{ disablePortal: true }}
    >
      <Fab className={classes.fab}>
        <TimerIcon />
      </Fab>
    </Tooltip>
  );
}
