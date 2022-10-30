import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IssuesProvider } from '../contexts/IssuesContext';

interface Props {
  children: React.ReactElement;
}

export function Providers({ children }: Props) {
  return (
    <Router>
      <IssuesProvider>{children}</IssuesProvider>
    </Router>
  );
}
