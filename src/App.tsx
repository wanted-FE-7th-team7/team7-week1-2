import React from 'react';
import { MainRouter } from './components/MainRouter';
import { Providers } from './components/Providers';

function App() {
  return (
    <Providers>
      <MainRouter />
    </Providers>
  );
}

export default App;
