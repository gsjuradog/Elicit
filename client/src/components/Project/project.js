import React from 'react';
import { CardContent, Grid, Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import TaskList from '../Tasks/TaskList';
import Title from '../Dashboard/Title';
import clsx from 'clsx';

const Project = (props) => {
  const classes = useStyles();
  //comes from fullImageProj
  const { title } = props.location.state;
  const { description } = props.location.state;
  //Comes frome useFireStore and App
  const content = props.useGetOneProject(title);
  const { tasks } = props.useGetTasks('projects', title);
  const project = { title: title };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <Grid container spacing={3}>
        {/* Project title and desc */}
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <Grid className={classes.projContainer} item xs={12} md={10} lg={11}>
              <Title>{title}</Title>
              <CardContent>
                <Typography variant="body1">{description}</Typography>
              </CardContent>
            </Grid>
          </Paper>
        </Grid>
        {/* Tasks */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Title>Tasks for this project</Title>
            <TaskList tasks={tasks} />
            <div className={classes.seeMore}>
              <Link color="primary" to={{ pathname: '/createTask', state: { project: project } }}>
                Add task
              </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Project;
