import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import useStyles from './styles';
import Projects from '../Projects/projects';

function ShowProjects() {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Projects />
      </Paper>
    </Grid>
  );
}
export default ShowProjects;
