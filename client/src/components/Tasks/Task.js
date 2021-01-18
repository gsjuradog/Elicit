import { Paper, Typography, Container, Grid } from '@material-ui/core';
import React from 'react';
import useStyles from '../../styles';

export default function Task() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Paper className={classes.paper} elevation={3}>
          <Typography>
            Create your Photo Elicitation proyects and share the link with the participants of your
            research
          </Typography>
        </Paper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
