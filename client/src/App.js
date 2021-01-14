import React from 'react';
import AppStyles from './styles';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Projects from './components/Projects/projects';
// import CardImage from './components/cardImage/CardImage';

function App() {
  const classes = AppStyles();
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          Elicit
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Projects></Projects>
            </Grid>
            <Grid item xs={12} sm={4}></Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
