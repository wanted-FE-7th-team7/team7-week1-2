import { useContext } from 'react';
import { issuesContext } from '../contexts/issuesContext';

const useIssues = () => {
  const issues = useContext(issuesContext);

  return issues;
};

export { useIssues };
