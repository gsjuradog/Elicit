import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import RecentProjects from '../Dashboard/recentProj';
import Activity from '../Dashboard/Activity';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  projContainer: {
    overflow: 'hidden',
  },
}));

function DashboardHome({ recentProjects }) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <>
      <Grid container spacing={3}>
        {/* last updated projects*/}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Grid className={classes.projContainer} item xs={12} md={10} lg={11}>
              <RecentProjects recent={recentProjects} />
            </Grid>
          </Paper>
        </Grid>
        {/* Activity */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Activity />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardHome;
