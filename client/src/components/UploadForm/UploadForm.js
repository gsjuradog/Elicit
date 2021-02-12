import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import AudioRecorder from '../AudioRecorder/AudioRecorder';
import useStyles from './styles';
import Form from './Form';

function UploadForm(props) {
  const classes = useStyles();

  const [showAudio, setShowAudio] = useState(null);
  const [finished, setFinished] = useState(null);
  //this makes the conection to the useStorage hook trough progressbar
  //wich in turn will store the file that is being given in firestore
  const { project, name, code } = props.location.state.user;

  const { tasks } = props.useGetTasks('projects', project);

  if (finished) {
    return <h1>Gracias</h1>;
  } else {
    return (
      <Container>
        {showAudio ? (
          <AudioRecorder showAudio={showAudio} setFinished={setFinished}></AudioRecorder>
        ) : (
          <Form
            setShowAudio={setShowAudio}
            tasks={tasks}
            project={project}
            name={name}
            code={code}></Form>
        )}
      </Container>
    );
  }
}

export default UploadForm;
