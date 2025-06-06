import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { EMDForm } from './pages/EMDForm';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emd" element={<EMDForm />} />
      </Routes>
    </Router>
  );
}

export default App;