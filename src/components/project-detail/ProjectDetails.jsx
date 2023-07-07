import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../projectsData';

const ProjectDetails = () => {
  const { id } = useParams();

  // Find the project with the matching ID
  const project = projectsData.find((project) => project.id === parseInt(id));
  console.log(project);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
