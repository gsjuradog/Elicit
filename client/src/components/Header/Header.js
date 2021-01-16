import React from 'react';
// import clsx from 'clsx';
import { AppBar, Typography } from '@material-ui/core';
// import Badge from '@material-ui/core/Badge';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

// import NotificationsIcon from '@material-ui/icons/Notifications';
import useStyles from './styles';

/* <AppBar className={classes.appBar} position="static" color="inherit">
  <Typography className={classes.heading} variant="h3" align="center">
    Elicit
  </Typography>
</AppBar> */

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Nav />
          <Typography variant="h5" className={classes.title}>
            Elicit
          </Typography>
          <Button color="inherit">
            <Link to="/login">Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
