import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  //----TODO----if loged change menu
  return (
    <>
      <IconButton
        className={classes.menuButton}
        edge="start"
        aria-controls="simple-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}>
        <MenuIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Link to="/test">Form p test</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/test2">tests project</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/">test form</Link>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Nav;
