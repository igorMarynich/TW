//@ts-nocheck
import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  })
);

export default function UploadButtons() {
  const classes = useStyles();

  const [file, setFile] = useState(null);

  const uploadSingleFile = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  let imgPreview;
  if (file) {
    imgPreview = (
      <img
        src={file}
        alt=""
        style={{
          maxWidth: '375px',
          maxHeight: '300px',
          position: 'relative',
          left: '65px',
        }}
      />
    );
  }

  return (
    <form className={classes.root}>
      <div className="form-group preview">{imgPreview}</div>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={uploadSingleFile}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" style={{ position: 'relative', left: '355px' }}>
          Upload
        </Button>
      </label>
    </form>
  );
}
