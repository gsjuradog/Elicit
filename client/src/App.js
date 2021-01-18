import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grow } from '@material-ui/core';
import Header from './components/Header/Header';
import Copyright from './components/Copyrigth/copyrigth';
import useStyles from './styles';
// import LoginPage from './components/LoginPage/LoginPage';
import SignUp from './components/SignUp/SignUp';
// import HomePage from './components/HomePage/HomePage';
import UploadForm from './components/UploadForm/UploadForm';
import AudioRecorder from './components/AudioRecorder/AudioRecorder';
import ProjectForm from './components/ProjectForm/ProjectForm';
import TaskForm from './components/Tasks/TaskForm';
import { addProjectsDB, addTask } from './components/hooks/useStorage';
import Projects from './components/Projects/projects';
import ShowProjects from './components/Dashboard/ShowProjects';
import AppBarLogged from './components/Dashboard/AppBarLogged';
import DashboardHome from './components/DashboardHome/DashboardHome';

function App() {
  const classes = useStyles();
  //mising routes so tests with flag pruebas
  const pruebas = true;
  const loggedin = true;
  //mock data
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const recentProjects = cards.slice(1, 4);

  if (pruebas) {
    return (
      <>
        {loggedin ? (
          <Router>
            <div className={classes.root}>
              <AppBarLogged />
              <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                  <Switch>
                    <Route path="/dashboard" render={(props) => <DashboardHome {...props} />} />
                    <Route path="/projects" render={(props) => <ShowProjects {...props} />} />
                    <Route path="/test2" render={(props) => <Projects {...props} />} />
                  </Switch>
                </Container>
              </main>
            </div>
          </Router>
        ) : (
          <Router>
            <div>
              <Header />
              <Grow in>
                <Container>
                  <Switch>
                    <Route path="/" exact component={AudioRecorder}></Route>
                    <Route
                      path="/login"
                      render={(props) => <TaskForm {...props} addTask={addTask} />}
                    />
                    <Route path="/test2" render={(props) => <Projects {...props} />} />

                    <Route
                      path="/test"
                      render={(props) => <ProjectForm {...props} addProjectsDB={addProjectsDB} />}
                    />
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
