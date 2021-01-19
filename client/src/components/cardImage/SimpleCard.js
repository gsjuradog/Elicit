import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Link } from '@material-ui/core';
import { Typography } from '@material-ui/core';
// import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import useStyles from './styles';


const Project = ({ title, description }) => {
  const classes = useStyles();
  const pruebas = false;

  function preventDefault(event) {
    event.preventDefault();
  }
 
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="body1" component="h2">
            {description}
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
  
  }
};

export default SimpleCard;