import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/auth/login';
import ProjectDetails from './components/project-detail/ProjectDetails';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/auth/login' element={<Login/>} />
      <Route path="/project/:id" element={<ProjectDetails/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
