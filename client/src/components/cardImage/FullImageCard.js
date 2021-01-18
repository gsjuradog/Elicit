import React from 'react';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import { FiCard, FiCardActionArea, FiCardContent, FiCardMedia } from './CardModifications';
import useStyles from './styles';

const FullImageProject = ({ title, description }) => {
  console.log(title);
  const classes = useStyles();
  const url = null;
  var img = url ? url : 'https://source.unsplash.com/random';
  return (
    <Box className={classes.box}>
      <FiCard className={classes.card}>
        <FiCardActionArea>
          <FiCardMedia media="picture" alt="Contemplative Reptile" title="Image title" />
          <FiCardContent className={classes.fiCardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              variant="body2"
              className={classes.fiCardContentTextSecondary}
              component="p">
              {description}
            </Typography>
          </FiCardContent>
        </FiCardActionArea>
      </FiCard>
    </Box>
  );
};

export default FullImageProject;
