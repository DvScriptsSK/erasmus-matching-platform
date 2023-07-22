import React from 'react';
import { useParams,Link } from 'react-router-dom';



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
          <span className='project-details-title'>{project.title}</span>
          <p>{project.description}</p>
          <p>{project.organizer}</p>

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
            <div className='project-detail-buttons'>
            <Link to={`${project.infolink}`}>
            <button className='project-detail-button'> Info Pack </button>
              </Link>
            <button className='project-detail-button'>Register</button>
          </div>
          </div>
          </center>
        </div>
    </div>
  );
};

export default ProjectDetails;
