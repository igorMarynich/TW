import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
var emoji = require('node-emoji');

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

export default function() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <div className={classes.buttonWrapper}>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={handleClick}
          className={classes.button}
        >
          Reactions
        </Button>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography
          onClick={() => {
            console.log('click1');
          }}
        >
          {emoji.get('fire')}
        </Typography>
        <Typography
          onClick={() => {
            console.log('click2');
          }}
        >
          {emoji.get('clap')}
        </Typography>
        <Typography
          onClick={() => {
            console.log('click3');
          }}
        >
          {emoji.get('muscle')}
        </Typography>
      </Popover>
    </div>
    //Fire, Clapping Hands, Flexing arm
  );
}
