import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddCircleIcon from '@material-ui/icons/AddCircleOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';

export const MainListItems = () => {
  // function handleClick(path) {
  //   history.push(path);
  // }
  return (
    <div>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem button component={Link} to="/projects">
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="projects" />
      </ListItem>
      <ListItem button component={Link} to="/createProject">
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Create project" />
      </ListItem>
      {/* future layers of dev */}
      {/* <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem> */}
    </div>
  );
};

export const SecondaryListItems = ({ setLogIn }) => {
  const handleClick = () => {
    setLogIn(false);
  };
  return (
    <div>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button component={Link} to="/test">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current proyect" />
      </ListItem>
      <ListItem button component={Link} to="/test2">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Proyect B" />
      </ListItem>
      <ListItem button component={Link} to="/" onClick={handleClick}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItem>
    </div>
  );
};
