import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../projectsData';
import NavBar from '../navbar/navbar';
import './projectdetail.css';

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projectsData.find((project) => project.id === parseInt(id));

  console.log(project);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <NavBar/>
        <div className='project-detail-container'>
        <center>
          <div className='project-details-container-content'>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>{project.organizer}</p>
          <div className='project-detail-buttons'>
            <button className='project-detail-button'>Info Pack</button>
            <button className='project-detail-button'>Register</button>
          </div>
          <div className='project-detail-map'>
            {/* Include map component or embed map iframe */}
            <p>Location Map</p>
          </div>
          <div className='project-detail-requirements'>
            <h3>Requirements</h3>
              <ul>
                <li>Requirement 1</li>
                <li>Requirement 2</li>
                <li>Requirement 3</li>
                {/* Add more requirements as needed */}
              </ul>
            </div>
          </div>
          </center>
        </div>
    </div>
  );
};

export default ProjectDetails;
