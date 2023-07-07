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
            <img className='project-list-img' src='https://www.adelslovakia.org/wp-content/uploads/2023/05/The-Europe-of-Language.jpg' alt={project.title} />
              <h3 className='project-list-des'>
                <span className='project-list-title'>{project.title}</span>
              </h3>
              <span className='project-list-organizer'>{project.organizer}</span>
              <Link to={`/project/${project.id}`} key={project.id} style={{ textDecoration: 'none' }}>
              <button className='project-list-btn'>View Project</button>
              </Link>
            </div>
        ))}
      </div>
      </center>
    </div>
  );
};

export default ProjectList;
