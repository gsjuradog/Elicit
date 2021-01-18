import React from 'react';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import { FiCard, FiCardActionArea, FiCardContent, FiCardMedia } from './CardModifications';
import useStyles from './styles';

const FullImageProject = ({ title, description }) => {
  console.log(title);
  const classes = useStyles();
  return (
    <Box>
      <FiCard className={classes.card}>
        <FiCardActionArea>
          <FiCardMedia
            media="picture"
            alt="Contemplative Reptile"
            image="https://source.unsplash.com/random"
            title="Image title"
          />
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
