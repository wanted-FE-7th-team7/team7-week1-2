import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layouts/Layout';
import DetailPage from './pages/DetailPage';
import IssuesPage from './pages/IssuesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <IssuesPage />
            </Layout>
          }
        />
        <Route
          path="/todo"
          element={
            <Layout>
              <DetailPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
