import React from 'react';
import Title from '../Dashboard/Title';
import Projects from '../Projects/projects';

const RecentProjects = ({ recentProject }) => {
  return (
    <>
      <Title>Last updated project</Title>
      <Projects recentProject={recentProject}></Projects>
    </>
  );
};

export default RecentProjects;
