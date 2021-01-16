import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grow } from '@material-ui/core';
// import Projects from './components/Projects/projects';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Copyright from './components/Copyrigth/copyrigth';
import AppStyles from './styles';
import LoginPage from './components/LoginPage/LoginPage';
import SignUp from './components/SignUp/SignUp';
import HomePage from './components/HomePage/HomePage';
import UploadForm from './components/UploadForm/UploadForm';
import AudioRecorder from './components/AudioRecorder/AudioRecorder';
// import UploadForm from './components/UploadForm/UploadForm';

function App() {
  const classes = AppStyles();
  //mising routes so tests with flag pruebas
  const pruebas = true;
  const loggedin = false;
  //mock data
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const recentProjects = cards.slice(1, 4);

  if (pruebas) {
    return (
      <>
        {loggedin ? (
          <Router>
            <Route path="/dashboard" component={Dashboard} />
          </Router>
        ) : (
          <Router>
            <div>
              <Header />
              <Grow in>
                <Container>
                  <Switch>
                    <Route path="/" exact component={AudioRecorder}></Route>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignUp} />
                  </Switch>
                  <Copyright />
                </Container>
              </Grow>
            </div>
          </Router>
        )}
      </>
    );
  } else {
    return (
      <>
        <Router>
          <Header />
          <SignUp></SignUp>
          <UploadForm></UploadForm>
          {/* <Container className={classes.cardGrid} maxWidth="md">
          <Projects cards={cards}></Projects>
        </Container>
        <Copyright /> */}
        </Router>
      </>
    );
  }
}

export default App;
