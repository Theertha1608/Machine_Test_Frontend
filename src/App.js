// App.js
import React from 'react';

import SignUp from './SignUp';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;



