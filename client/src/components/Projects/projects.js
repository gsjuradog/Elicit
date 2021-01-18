import React from 'react';
import Project from '../Project/project';
import FullImageProject from '../cardImage/FullImageCard';
import { Link, Grid, CssBaseline } from '@material-ui/core';
// import Container from '@material-ui/core/Container';
// import Copyright from '../Copyrigth/copyrigth';
// import useStyles from './styles';
import { useFireStore } from '../hooks/useFireStore';

const Projects = ({ recent }) => {
  const { docs } = useFireStore('projects');
  console.log(docs[0], 'docs');

  const doc = docs[0];
  function preventDefault(event) {
    event.preventDefault();
  }
  const pruebas = false;
  if (pruebas) {
    return (
      <div>
        <FullImageProject title={doc.data.title} description={doc.data.description} />
      </div>
    );
  } else {
    return (
      <>
        <CssBaseline />
        <main>
          <Grid container spacing={4}>
            {docs.map((doc) => (
              <Grid item key={doc.id} xs={12} sm={6} md={4}>
                <Link underline="none" href="#" onClick={preventDefault}>
                  <FullImageProject title={doc.data.title} description={doc.data.description} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </main>
      </>
    );
  }
};

export default Projects;
