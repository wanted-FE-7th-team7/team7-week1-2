import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IssueListPage from './pages/IssueListPages';
import IssueDetailPage from './pages/IssueDetailPage';
import Layout from './layout/Layout';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
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
