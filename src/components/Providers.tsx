import * as React from 'react';
import { IssuesProvider } from '../contexts/IssuesProvider';
import { BrowserRouter as Router } from 'react-router-dom';

type Props = {
  children: React.ReactElement;
};

export function Providers({ children }: Props) {
  return (
    <Router>
      <IssuesProvider>{children}</IssuesProvider>
    </Router>
  );
}
