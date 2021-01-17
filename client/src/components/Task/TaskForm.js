import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Paper, Button, TextField, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function TaskForm({ addTask }) {
  const classes = useStyles();
  const [task, setTask] = useState({
    title: '',
    description: '',
    city: '',
    country: '',
  });

  function handleChanges(e) {
    const value = e.target.value;
    setTask((event) => ({
      ...event,
      [e.target.name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!task.title || !task.description) return alert('Title and description are necesary');
    addTask(task);
    setTask({
      title: '',
      date: '',
      venue: '',
    });
  }

  return (
    <Paper className={classes.paper}>
      <form></form>
      <Typography variant="h6" gutterBottom>
        Create project
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
            rowsMax={6}
            name="description"
            label="Short description of project max 150 words"
            inputProps={{ maxLength: 250 }}
            fullWidth
            onChange={handleChanges}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="city" name="city" label="City" fullWidth onChange={handleChanges} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            onChange={handleChanges}
          />
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.button} variant="contained" onClick={handleSubmit}>
            {' '}
            Create{' '}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TaskForm;
