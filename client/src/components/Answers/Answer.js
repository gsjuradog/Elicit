import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
// import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

export default function Answer() {
  const mockImage =
    'https://firebasestorage.googleapis.com/v0/b/elicit-5039d.appspot.com/o/faceWatchmen.jpg?alt=media&token=0fcb7a9c-7334-4ba5-ac1b-b523096c8ee3';
  const classes = useStyles();
  const mockAudio =
    'https://firebasestorage.googleapis.com/v0/b/elicit-5039d.appspot.com/o/audios%2F26198?alt=media&token=0c10b87f-2d7f-428b-a142-617cb1370c6b';
  return (
    <>
      <Box className={classes.cardContainer}>
        <Container className={classes.cardGrid} justify="space-between">
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={mockImage} title="Image title" />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {/* {data.name} */} Gabriel Jurado
              </Typography>
              <Typography gutterBottom variant="body2" component="h4">
                {/* <p>{data.questions}</p> */} Upload test picture
              </Typography>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <audio src={mockAudio} controls controlsList="nodownload" autoPlay>
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
