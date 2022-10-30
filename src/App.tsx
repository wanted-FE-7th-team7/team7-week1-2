import React from 'react';
import Header from './components/Header';
import BoardPage from './pages/BoardPage';
import IssuePage from './pages/IssuePage';
import { Route, Routes } from 'react-router';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<BoardPage />} />
        <Route path="/issues/:number" element={<IssuePage />} />
      </Routes>
    </div>
  );
}

export default App;
