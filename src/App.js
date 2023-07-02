import React from 'react';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import './App.css';
import projectsData from './projectsData';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='main'>
        <div className='header'>
          <h1>Erasmus Projects</h1>
          <h2>Find projects that suit you</h2>
          <button type="button">Find project</button>
        </div>
          <Route exact path="/" component={() => <ProjectList projects={projectsData} />} />
          <Route path="/project/:id" component={ProjectDetails} />
      </div>
    </Router>
  );
};


export default App;
