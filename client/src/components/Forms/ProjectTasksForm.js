import React, { useState } from 'react';
import Title from '../Dashboard/Title';
import ProjectForm from '../ProjectForm/ProjectForm';
import TaskForm from '../Tasks/TaskForm';

function ProjectTaskForm({ addProjectsDB }) {
  const [titleAndDesc, setTitleAndDesc] = useState({});
  console.log(titleAndDesc, 'project task form');

  return (
    <>
      {titleAndDesc ? (
        <>
          <Title>{titleAndDesc.title}</Title>
          <TaskForm></TaskForm>
        </>
      ) : (
        <>
          <ProjectForm
            setTitleAndDesc={setTitleAndDesc}
            addProjectsDB={addProjectsDB}></ProjectForm>
          <TaskForm></TaskForm>
        </>
      )}
    </>
  );
}
export default ProjectTaskForm;
