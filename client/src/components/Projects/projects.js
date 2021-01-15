import React from 'react';
import Project from '../Project/project';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
// import Copyright from '../Copyrigth/copyrigth';
// import useStyles from './styles';

const Projects = ({ cards }) => {
  // const classes = useStyles();
  const pruebas = false;
  if (pruebas) {
    return (
      <div>
        <Project></Project>
      </div>
    );
  } else {
    return (
      <>
        <CssBaseline />
        <main>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Project />
              </Grid>
            ))}
          </Grid>
        </main>
        {/* Footer */}
        {/* <footer className={classes.footer}>
          <Copyright />
        </footer> */}
        {/* End footer */}
      </>
    );
  }
};

export default Projects;
