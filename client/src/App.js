import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Projects from './components/Projects/projects';
// import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

// import CardImage from './components/cardImage/CardImage';

function App() {
  const pruebas = false;
  if (pruebas) {
    return (
      <div>
        <Header />
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Projects></Projects>
              </Grid>
              <Grid item xs={12} sm={1}></Grid>
            </Grid>
          </Container>
        </Grow>
      </div>
    );
  } else {
    return <Dashboard></Dashboard>;
  }
}

export default App;
