import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
// import EditIcon from '@material-ui/icons/Edit';

import useStyles from './styles';

export default function Answer() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.cardContainer}>
        <Container className={classes.cardGrid} justify="space-between">
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={
                'https://firebasestorage.googleapis.com/v0/b/elicit-5039d.appspot.com/o/lavado-manos%20tiny.jpg?alt=media&token=f25333b4-96c9-4c8f-b8a1-c14fa2cc0c26'
              }
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {/* {data.name} */}
              </Typography>
              <Typography gutterBottom variant="body2" component="h4">
                {/* <p>{data.questions}</p> */}
              </Typography>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <audio
                src={
                  'https://firebasestorage.googleapis.com/v0/b/elicit-5039d.appspot.com/o/audios%2F29846?alt=media&token=9a07a91d-3fa1-420d-9282-a26d82ebb6f4'
                }
                controls
                controlsList="nodownload"
                autoPlay>
                {' '}
                <trac></trac>
              </audio>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Container>
      </Box>
    </>
  );
}
