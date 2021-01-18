import React, { useState } from 'react';
import { Paper, Button, TextField, Typography, Grid } from '@material-ui/core';
import useStyles from '../ProjectForm/styles';

function TaskForm({ addTask }) {
  const classes = useStyles();
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  function handleChanges(e) {
    const value = e.target.value;
    setTask((task) => ({
      ...task,
      [e.target.name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!task.title || !task.description) return alert('Title and description are necesary');
    addTask(task);
    setTask({
      title: '',
      description: '',
    });
  }

  return (
    <Paper className={classes.paper}>
      <form></form>
      <Typography variant="h6" gutterBottom>
        Create task
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
            onChange={handleChanges}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Description"
            multiline
            rowsMax={8}
            name="description"
            label="Write here the instructions for your research participants."
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
  );
}

export default TaskForm;
