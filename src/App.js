import React from 'react';
import ProjectList from './components/project-list/ProjectList';
import './App.css';
import projectsData from './projectsData';

const App = () => {
  return (
      <div className='main'>
        <div className='header'>
          <h1>Erasmus Projects</h1>
          <h2>Find projects that suit you</h2>
          <button type="button">Find project</button>
        </div>
          <ProjectList projects={projectsData} />
        </div>
  );
};


export default App;
