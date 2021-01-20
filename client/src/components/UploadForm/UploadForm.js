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

  //for some reason there is no way to get this and not get just a promise that breaks all
  // async function findTasks(collection, project) {
  //   let { tasks } = await useGetTasks(collection, project);

  //   return setTasks(tasks);
  // }
  const { tasks } = props.useGetTasks('projects', project);
  console.log(props.history, 'history');
  // findTasks(collection, project);

  //could not create a form  that correctly updated the state before sending the query to store the image,
  //because it trigers on handlechanges...onsubmit didnt work.
  // if (tasks.length > 0) {
  //   console.log(tasks);
  //   const taskTitle = tasks[0].data.task;
  //   data = { taskTitle: taskTitle, projectTitle: project, name: name, code: code };
  // }
  // const taskTitle = tasks.length > 0 ? tasks[0].data.task : 'did not loaded';
  //

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
