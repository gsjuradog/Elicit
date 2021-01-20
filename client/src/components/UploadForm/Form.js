import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Paper, Typography, Grid } from '@material-ui/core';
import ProgressBar from '../ProgressBar.js/ProgressBar';
import useStyles from './styles';

export default function Form({ setShowAudio, tasks, project, name, code }) {
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const classes = useStyles();
  //Tasks are not being passed correctly, a promise arrives first
  // eslint-disable-next-line
  console.log(tasks, 'form');
  //therefore I mocked the taskTitle
  const taskTitle = 'Upload a picture that represents an hygine habit';
  const questions = 'How does this image represent your hygine habits?';
  const data = {
    taskTitle: taskTitle,
    questions: questions,
    projectTitle: project,
    name: name,
    code: code,
  };
  console.log(data);
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
    <>
      <Paper className={classes.paper}>
        {tasks.length > 0 ? (
          <Typography variant="h6" gutterBottom>
            {taskTitle}
            {/* {tasks[0].data.task} */}
          </Typography>
        ) : (
          <Typography variant="h6" gutterBottom>
            {taskTitle}
          </Typography>
        )}

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
              {file && (
                <ProgressBar
                  setShowAudio={setShowAudio}
                  file={file}
                  setFile={setFile}
                  data={data}
                />
              )}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
