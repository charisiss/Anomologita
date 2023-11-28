import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home'; // Import your other components
import NewPage from './pages/NewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newpage" element={<NewPage />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
