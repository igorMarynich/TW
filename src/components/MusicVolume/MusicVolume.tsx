import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function MusicVolume() {
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Music Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <MusicOffIcon />
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <MusicNoteIcon />
        </Grid>
      </Grid>
    </div>
  );
}
