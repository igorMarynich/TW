import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import ChatIcon from '@material-ui/icons/Chat';
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

export default function ChatButton() {
  const classes = useStyles();
  //   const { room } = useVideoContext();

  return (
    <Tooltip
      title={'Chat'}
      // onClick={() => room.disconnect()}
      placement="top"
      PopperProps={{ disablePortal: true }}
    >
      <Fab className={classes.fab}>
        <ChatIcon />
      </Fab>
    </Tooltip>
  );
}
