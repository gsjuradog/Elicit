import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grow } from '@material-ui/core';
import Header from './components/Header/Header';
import Copyright from './components/Copyrigth/copyrigth';
import useStyles from './styles';
import LoginPage from './components/LoginPage/LoginPage';
import SignUp from './components/SignUp/SignUp';
// import HomePage from './components/HomePage/HomePage';
import UploadForm from './components/UploadForm/UploadForm';
import AudioRecorder from './components/AudioRecorder/AudioRecorder';
import ProjectForm from './components/ProjectForm/ProjectForm';
import TaskForm from './components/Tasks/TaskForm';
import { addProjectsDB, addTask } from './components/hooks/useStorage';
import { useGetOneProject, useGetTasks } from './components/hooks/useFireStore';
import Projects from './components/Projects/projects';
import ShowProjects from './components/Dashboard/ShowProjects';
import AppBarLogged from './components/Dashboard/AppBarLogged';
import DashboardHome from './components/DashboardHome/DashboardHome';

import Project from './components/Project/project';

function App() {
  const classes = useStyles();
  const [logeIn, setLogIn] = useState(false);
  //mising routes so tests with flag pruebas
  const pruebas = true;

  // function allowCreateTask() {
  //   history.push('/createTask');
  // }

  //mock data
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const recentProjects = cards.slice(1, 4);

  if (pruebas) {
    return (
      <>
        {logeIn ? (
          <Router>
            <div className={classes.root}>
              <AppBarLogged setLogIn={setLogIn} />
              <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                  <Switch>
                    <Route path="/" exact render={(props) => <DashboardHome {...props} />} />
                    <Route path="/projects" exact render={(props) => <ShowProjects {...props} />} />
                    <Route
                      path="/projects/:handle"
                      render={(props) => (
                        <Project
                          {...props}
                          useGetTasks={useGetTasks}
                          useGetOneProject={useGetOneProject}
                        />
                      )}
                    />
                    <Route
                      path="/createProject"
                      render={(props) => <ProjectForm {...props} addProjectsDB={addProjectsDB} />}
                    />
                    <Route
                      path="/createTask"
                      render={(props) => <TaskForm {...props} addTask={addTask} />}
                    />
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
                    <Route path="/AudioRecorder" exact component={AudioRecorder}></Route>
                    <Route
                      path="/"
                      render={(props) => <LoginPage {...props} setLogIn={setLogIn} />}
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
