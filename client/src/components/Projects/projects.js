import React from 'react';
import FullImageProject from '../cardImage/FullImageCard';
import { Grid, CssBaseline } from '@material-ui/core';
import { useFireStore } from '../hooks/useFireStore';

const Projects = ({ recentProject }) => {
  const { docs } = useFireStore('projects');

  const doc = docs[0];

  if (recentProject) {
    return (
      <>
        {doc && (
          <div>
            <FullImageProject title={doc.data.title} description={doc.data.description} />
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <CssBaseline />
        <main>
          <Grid container spacing={4}>
            {docs.map((doc) => (
              <Grid item key={doc.id} xs={12} sm={6} md={4}>
                <FullImageProject title={doc.data.title} description={doc.data.description} />
              </Grid>
            ))}
          </Grid>
        </main>
      </>
    );
  }
};

export default Projects;
