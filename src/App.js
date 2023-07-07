  import React from 'react';
  import ProjectList from './components/project-list/ProjectList';
  import './App.css';
  import projectsData from './projectsData';
  import NavBar from './components/navbar/navbar';

  const App = () => {
    return (
      <div>
        <NavBar />
        <div className='main'>
          <div className='header'>
            <h1>Erasmus Projects</h1>
            <h2>Find projects that suit you</h2>
            <button type="button">Find project</button>

          </div>
            <div className='listside'>
              <ProjectList projects={projectsData} />
            </div>
        </div>
      </div>
    );
  };

  export default App;
