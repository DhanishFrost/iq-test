import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import IQTestPage from './pages/IQTestPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/IQTest" element={<IQTestPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
