import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

import { Issue } from '../models/issue';
import { issuesLoader } from '../utils/issuesLoader';
import { issuesContext as IssuesContext } from './issuesContext';
import { loadIssuesContext as LoadIssuesContext } from './loadIssuesContext';

interface Props {
  children: React.ReactElement;
}

function IssuesProvider({ children }: Props) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const navigate = useNavigate();

  const loadIssues = useCallback(async () => {
    try {
      const { isEnd, newIssues } = await issuesLoader.getNextIssuesAsync();
      setIssues(prevIssues => [...prevIssues, ...newIssues]);
      return isEnd;
    } catch {
      navigate('/error');
      return false;
    }
  }, [navigate]);

  return (
    <IssuesContext.Provider value={issues}>
      <LoadIssuesContext.Provider value={loadIssues}>
        {children}
      </LoadIssuesContext.Provider>
    </IssuesContext.Provider>
  );
}

export { IssuesProvider };
