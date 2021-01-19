import React, { useState } from 'react';
import { Paper, Button, TextField, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function ProjectForm({ addProjectsDB, history }) {
  const classes = useStyles();
  const [project, setProject] = useState({
    title: '',
    description: '',
  });

  function redirect() {
    history.push('/dashboard');
  }

  function handleChanges(e) {
    const value = e.target.value;
    setProject((event) => ({
      ...event,
      [e.target.name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!project.title || !project.description) return alert('Title and description are necesary');

    addProjectsDB(project);
    console.log(project.title);
    redirect();
    // setTitleAndDesc({ title: project.title, description: project.description });
    setProject({
      title: '',
      description: '',
    });
  }

  return (
    <>
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
              label="Description of project max 250 words"
              inputProps={{ maxLength: 250 }}
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

export default ProjectForm;
