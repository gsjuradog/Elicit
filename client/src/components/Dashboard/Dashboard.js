import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx'; // used to conditionally apply a given className
import { CssBaseline, Drawer, Box, AppBar, Toolbar, List, Typography } from '@material-ui/core';
import { Divider, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { MainListItems, SecondaryListItems } from './listItems';
// import Deposits from './Deposits';
import Copyright from '../Copyrigth/copyrigth';
import useStyles from './styles';
import DashboardHome from '../DashboardHome/DashboardHome';
// import ShowProjects from './ShowProjects';

export default function Dashboard({ history }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log(history, 'dashboard');

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Elicit
          </Typography>
          <Typography>New project</Typography>
          <IconButton color="inherit">
            <Link to="/test2">
              <AddCircleOutlineIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}>
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <MainListItems history={history} />
        <Divider />
        <List>{SecondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <DashboardHome></DashboardHome>
          {/* <Router>
            <Switch>
              <Route path="/projects" component={ShowProjects} />
              <Route path="/dashBoardHome" component={DashboardHome} />
            </Switch>
          </Router> */}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
