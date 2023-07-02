import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from './projectsData';

const ProjectList = () => {
  return (
    <div>
      <h2>Project List</h2>
      {projectsData.map((project) => (
        <div key={project.id}>
          <h3>
            <Link to={`/project/${project.id}`}>{project.title}</Link>
          </h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
