import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Navigation />
        <div className="p-6">
          <Routes>
            <Route path="/transactions" element={<Dashboard section="transactions" />} />
            <Route path="/transfer" element={<Dashboard section="transfer" />} />
            <Route path="/blocks" element={<Dashboard section="blocks" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
