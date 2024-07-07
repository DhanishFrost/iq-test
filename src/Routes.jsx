import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import IQTestPage from './pages/IQTestPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/iq-test/" element={<HomePage />} />
    <Route path="/iq-test/IQTest" element={<IQTestPage />} />
  </Routes>
);

export default AppRoutes;
