import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { FiCard, FiCardActionArea, FiCardContent, FiCardMedia } from './CardModifications';
import useStyles from './styles';

const FullImageProject = ({ title, description }) => {
  const CapitalizedDesc = description.charAt(0).toUpperCase() + description.slice(1);
  const pathTitle = title.replace(/\s/g, '').trim();
  const classes = useStyles();
  const url = null;
  var img = url ? url : 'https://source.unsplash.com/random';
  return (
    <Box className={classes.box}>
      <FiCard className={classes.card}>
        <FiCardActionArea
          component={Link}
          to={{
            pathname: `/projects/${pathTitle}`,
            state: { description: `${CapitalizedDesc}`, title: `${title}` },
          }}>
          <FiCardMedia media="picture" alt="Contemplative Reptile" title="Image title" />
          <FiCardContent className={classes.fiCardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              variant="body2"
              className={classes.fiCardContentTextSecondary}
              component="p">
              {CapitalizedDesc}
            </Typography>
          </FiCardContent>
        </FiCardActionArea>
      </FiCard>
    </Box>
  );
};

export default FullImageProject;
