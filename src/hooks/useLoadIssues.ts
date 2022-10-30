import { useContext } from 'react';
import { loadIssuesContext } from '../contexts/loadIssuesContext';

const useLoadIssues = () => {
  const loadNextIssues = useContext(loadIssuesContext);

  return loadNextIssues;
};

export { useLoadIssues };
