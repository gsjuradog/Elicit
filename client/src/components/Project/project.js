import React from 'react';
import { Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
const Project = () => {
  const classes = useStyles();
  const pruebas = false;
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
      <Card className={classes.cardSmall} textoverflow="ellipsis">
        <CardMedia
          className={classes.cardMediaSmall}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContentSmall}>
          <Typography gutterBottom noWrap variant="h7" component="h7">
            Project name... Project name... Project name... Project name... Project name...
          </Typography>
          <Button size="small">go</Button>
        </CardContent>
        {/* <CardContent className={classes.cardContentSmall}>
          <Typography gutterBottom variant="h7" component="h7">
            Project name...
          </Typography>
        </CardContent> */}
      </Card>
    );
  }
};

export default Project;
