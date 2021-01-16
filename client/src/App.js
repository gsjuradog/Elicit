import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grow } from '@material-ui/core';
import Projects from './components/Projects/projects';
import Header from './components/Header/Header';
import LoginForm from './components/loginform/loginForm';
// import Dashboard from './components/Dashboard/Dashboard';
import Copyright from './components/Copyrigth/copyrigth';
import AppStyles from './styles';
import LoginPage from './components/LoginPage/LoginPage';
// import UploadForm from './components/UploadForm/UploadForm';

function App() {
  const classes = AppStyles();
  //mising routes so tests with flag pruebas
  const pruebas = true;
  //mock data
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const recentProjects = cards.slice(1, 4);
  if (pruebas) {
    return (
      <Router>
        <div>
          <Header />
          <Grow in>
            <Container>
              <Route path="/login" component={LoginPage} />
              {/* <LoginPage /> */}
              <Copyright />
            </Container>
          </Grow>
        </div>
      </Router>
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
