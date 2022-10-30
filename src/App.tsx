import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IssueListPage from './pages/IssueListPages';
import IssueDetailPage from './pages/IssueDetailPage';
import Layout from './layout/Layout';
import GlobalStyle from './style/GlobalStyle';
import { IssuesProvider } from './contexts/IssuesContext';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <IssuesProvider>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route element={<IssueListPage />} path="/" />
              <Route element={<IssueDetailPage />} path="/:issueId" />
            </Routes>
          </BrowserRouter>
        </Layout>
      </IssuesProvider>
    </div>
  );
}

export default App;
