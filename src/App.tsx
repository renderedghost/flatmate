import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
// import './App.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;