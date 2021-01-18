import React, { useState } from 'react';
import { Paper, Button, TextField, Typography, Grid } from '@material-ui/core';
import useStyles from '../ProjectForm/styles';
import { useFireStore } from '../hooks/useFireStore';

function TaskForm({ addTask, history }) {
  const classes = useStyles();
  const [task, setTask] = useState({
    task: '',
    questions: '',
  });
  const { docs } = useFireStore('projects');

  // const [Title, setTitle] = useState({});
  function TaskAdded() {
    history.push('/dashboard');
  }

  function handleChanges(e) {
    const value = e.target.value;
    setTask((task) => ({
      ...task,
      [e.target.name]: value,
    }));
  }
  const projectTitle = docs[0].data.title;
  function handleSubmit(e) {
    e.preventDefault();
    if (!task.task || !task.questions) return alert('description and questions are necesary');
    addTask(task, projectTitle);
    TaskAdded();
    setTask({
      title: '',
      description: '',
    });
  }

  return (
    <>
      {docs && <Typography>{docs[0].data.title}</Typography>}
      <Paper className={classes.paper}>
        <form></form>
        <Typography variant="h6" gutterBottom>
          Create task
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="task"
              name="task"
              label="e.g. Upload and image of yourself"
              fullWidth
              onChange={handleChanges}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="questions"
              multiline
              rowsMax={8}
              name="questions"
              label="Questions to be answered"
              inputProps={{ maxLength: 450 }}
              fullWidth
              onChange={handleChanges}
            />
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.button} variant="contained" onClick={handleSubmit}>
              Create
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default TaskForm;
