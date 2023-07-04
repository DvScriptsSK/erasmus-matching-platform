import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../projectsData';
import './project.css';

const ProjectList = () => {
  return (
    <div className='project-list-container-div'>
      <h2 className='project-list-container-title'>ALL PROJECTS</h2>
      <center>
      <div className='project-list-container'>
        {projectsData.map((project) => (
            <div className='project-list'>
          <Link to={`/project/${project.id}`} key={project.id} style={{ textDecoration: 'none' }}>
              <h3 className='project-list-des'>
                <span className='project-list-title'>{project.title}</span>
              </h3>
              <span className='project-list-organizer'>{project.organizer}</span>
              <p className='project-list-desc'>{project.description}</p>
              </Link>
            </div>
        ))}
      </div>
      </center>
    </div>
  );
};

export default ProjectList;
