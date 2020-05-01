import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
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

export default function Reactions() {
  const classes = useStyles();
  //   const { room } = useVideoContext();

  return (
    <Tooltip
      title={'Reactions'}
      // onClick={() => room.disconnect()}
      placement="top"
      PopperProps={{ disablePortal: true }}
    >
      <Fab className={classes.fab}>
        <MonetizationOnIcon />
      </Fab>
    </Tooltip>
  );
}
