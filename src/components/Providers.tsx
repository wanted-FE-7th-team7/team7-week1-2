import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TestIssuesProvider } from '../contexts/IssuesContext';

type Props = {
  children: React.ReactElement;
};

export function Providers({ children }: Props) {
  return (
    <Router>
      <TestIssuesProvider>{children}</TestIssuesProvider>
    </Router>
  );
}
