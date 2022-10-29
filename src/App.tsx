import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Detail from './pages/Detail';
import Issues from './pages/Issues';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Issues />
            </Layout>
          }
        />
        <Route
          path="/todo"
          element={
            <Layout>
              <Detail />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
