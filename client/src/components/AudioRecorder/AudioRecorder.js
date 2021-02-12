/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-env browser */
import React, { useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { Box, Card, CardActions, CardContent, CardMedia, Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import useStyles from './styles';
import AudioProgressBar from '../ProgressBar.js/AudioProgressBar';

const MediaRecorder = ({ showAudio, setFinished }) => {
  const { url, data } = showAudio;

  const [file, setFile] = useState(null);
  const classes = useStyles();
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    pauseRecording,
  } = useReactMediaRecorder({
    audio: true,
  });
  const save = async () => {
    const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob());
    // eslint-disable-next-line
    console.log(audioBlob instanceof Blob, audioBlob);
    setFile(audioBlob);
  };
  //Retrieve data from server and change this info

  return (
    <>
      <Box className={classes.cardContainer}>
        <Container className={classes.cardGrid} justify="space-between">
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={url} title="Image title" />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {/* {data.questions} */} How does this image represent your hygine habits?
              </Typography>
              <Typography gutterBottom variant="body2" component="h4">
                <p>{status}</p>
              </Typography>
              <audio src={mediaBlobUrl} controls controlsList="nodownload" autoPlay />
            </CardContent>
            <CardActions>
              {file && (
                <AudioProgressBar
                  setFinished={setFinished}
                  file={file}
                  setFile={setFile}
                  data={data}
                />
              )}
              <Button onClick={startRecording} size="small" color="primary">
                Start
              </Button>
              <Button onClick={pauseRecording} size="small" color="primary">
                Pause
              </Button>
              <Button onClick={stopRecording} size="small" color="primary">
                Stop
              </Button>
              <Button onClick={save} size="small" color="primary">
                save
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default MediaRecorder;
