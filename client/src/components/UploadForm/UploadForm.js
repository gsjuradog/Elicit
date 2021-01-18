import { Container, Button } from '@material-ui/core';
import { Paper, Typography, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import ProgressBar from '../ProgressBar.js/ProgressBar';
import useStyles from './styles';

function UploadForm() {
  const classes = useStyles();

  //this makes the conection to the useStorage hook
  //wich in turn will store the file that is being given in firestore

  const [file, setFile] = useState(null);
  const [project, setProject] = useState({
    title: '',
  });

  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  var readyToSave = false;

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
      <Paper className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          Upload image
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} xm={6}>
            <input
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={changeHandler}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" className={classes.button} component="span">
                Upload
              </Button>
            </label>

            <div className="output">
              {error && <div className="error">{error}</div>}
              {file && <div>{file.name}</div>}
              {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default UploadForm;
