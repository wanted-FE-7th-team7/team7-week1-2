import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IssueListPage from './pages/IssueListPages';
import IssueDetailPage from './pages/IssueDetailPage';
import Layout from './layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout header="header">
        <BrowserRouter>
          <Routes>
            <Route element={<IssueListPage />} path="/" />
            <Route element={<IssueDetailPage />} path="/:issueId" />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
