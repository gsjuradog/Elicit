import { Container, Button } from '@material-ui/core';
import React, { useState } from 'react';
import ProgressBar from '../ProgressBar.js/ProgressBar';
import useStyles from './styles';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import TextField from '@material-ui/core/TextField';
// import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

function UploadForm() {
  const classes = useStyles();
  const [file, setFile] = useState(null);

  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('please select and image file (png or jpeg');
    }
  };
  return (
    <Container>
      <form>
        <input
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={changeHandler}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </Container>
  );
}

export default UploadForm;
