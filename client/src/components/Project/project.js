import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Link } from '@material-ui/core';
import { Typography } from '@material-ui/core';
// import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import FullImageProject from '../cardImage/FullImageCard';
const Project = ({ title, description }) => {
  const classes = useStyles();
  const pruebas = false;
  console.log(title, 'project');
  function preventDefault(event) {
    event.preventDefault();
  }
  if (pruebas) {
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Project title
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Link underline="none" href="#" onClick={preventDefault}>
        <FullImageProject title={title} description={description}></FullImageProject>
      </Link>
    );
  }
};

export default Project;
