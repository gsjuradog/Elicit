import React from 'react';
import Title from '../Dashboard/Title';
import Projects from '../Projects/projects';

const RecentProjects = ({ cards }) => {
  return (
    <>
      <Title>Last updated projects</Title>
      <Projects cards={cards}></Projects>
    </>
  );
};

export default RecentProjects;
