import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Projects from './components/Projects/projects';
import Header from './components/Header/Header';
import LoginForm from './components/loginform/loginForm';
// import Dashboard from './components/Dashboard/Dashboard';
import Copyright from './components/Copyrigth/copyrigth';
import AppStyles from './styles';

function App() {
  const classes = AppStyles();
  const pruebas = false;
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const recentProjects = cards.slice(1, 4);
  if (pruebas) {
    return (
      <div>
        <Header />
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Projects cards={cards}></Projects>
              </Grid>
              <Grid item xs={12} sm={5}>
                <LoginForm></LoginForm>
              </Grid>
            </Grid>
            <Copyright />
          </Container>
        </Grow>
      </div>
    );
  } else {
    return (
      <>
        <Header />
        <Container className={classes.cardGrid} maxWidth="md">
          <Projects cards={cards}></Projects>
        </Container>
        <Copyright />
      </>
    );
    // return <Dashboard></Dashboard>;
  }
}

export default App;
