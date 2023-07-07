import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/auth/login';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/auth/login' element={<Login />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
